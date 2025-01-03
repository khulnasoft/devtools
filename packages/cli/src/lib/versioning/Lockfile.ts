/*
 * Copyright 2020 The Devtools Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs-extra';
import { parseSyml, stringifySyml } from '@yarnpkg/parsers';
import { stringify as legacyStringifyLockfile } from '@yarnpkg/lockfile';

const ENTRY_PATTERN = /^((?:@[^/]+\/)?[^@/]+)@(.+)$/;

type LockfileData = {
  [entry: string]: {
    version: string;
    resolved?: string;
    integrity?: string /* old */;
    checksum?: string /* new */;
    dependencies?: { [name: string]: string };
    peerDependencies?: { [name: string]: string };
  };
};

type LockfileQueryEntry = {
  range: string;
  version: string;
  dataKey: string;
};

// the new yarn header is handled out of band of the parsing
// https://github.com/yarnpkg/berry/blob/0c5974f193a9397630e9aee2b3876cca62611149/packages/yarnpkg-core/sources/Project.ts#L1741-L1746
const NEW_HEADER = `${[
  `# This file is generated by running "yarn install" inside your project.\n`,
  `# Manual changes might be lost - proceed with caution!\n`,
].join(``)}\n`;

// taken from yarn parser package
// https://github.com/yarnpkg/berry/blob/0c5974f193a9397630e9aee2b3876cca62611149/packages/yarnpkg-parsers/sources/syml.ts#L136
const LEGACY_REGEX = /^(#.*(\r?\n))*?#\s+yarn\s+lockfile\s+v1\r?\n/i;

// these are special top level yarn keys.
// https://github.com/yarnpkg/berry/blob/9bd61fbffb83d0b8166a9cc26bec3a58743aa453/packages/yarnpkg-parsers/sources/syml.ts#L9
const SPECIAL_OBJECT_KEYS = [
  `__metadata`,
  `version`,
  `resolution`,
  `dependencies`,
  `peerDependencies`,
  `dependenciesMeta`,
  `peerDependenciesMeta`,
  `binaries`,
];

export class Lockfile {
  static async load(path: string) {
    const lockfileContents = await fs.readFile(path, 'utf8');
    return Lockfile.parse(lockfileContents);
  }

  static parse(content: string) {
    const legacy = LEGACY_REGEX.test(content);

    let data: LockfileData;
    try {
      data = parseSyml(content);
    } catch (err) {
      throw new Error(`Failed yarn.lock parse, ${err}`);
    }

    const packages = new Map<string, LockfileQueryEntry[]>();

    for (const [key, value] of Object.entries(data)) {
      if (SPECIAL_OBJECT_KEYS.includes(key)) continue;

      const [, name, ranges] = ENTRY_PATTERN.exec(key) ?? [];
      if (!name) {
        throw new Error(`Failed to parse yarn.lock entry '${key}'`);
      }

      let queries = packages.get(name);
      if (!queries) {
        queries = [];
        packages.set(name, queries);
      }
      for (let range of ranges.split(/\s*,\s*/)) {
        if (range.startsWith(`${name}@`)) {
          range = range.slice(`${name}@`.length);
        }
        if (range.startsWith('npm:')) {
          range = range.slice('npm:'.length);
        }
        queries.push({ range, version: value.version, dataKey: key });
      }
    }

    return new Lockfile(packages, data, legacy);
  }

  private constructor(
    private readonly packages: Map<string, LockfileQueryEntry[]>,
    private readonly data: LockfileData,
    private readonly legacy: boolean = false,
  ) {}

  /** Get the entries for a single package in the lockfile */
  get(name: string): LockfileQueryEntry[] | undefined {
    return this.packages.get(name);
  }

  /** Returns the name of all packages available in the lockfile */
  keys(): IterableIterator<string> {
    return this.packages.keys();
  }

  toString() {
    return this.legacy
      ? legacyStringifyLockfile(this.data)
      : NEW_HEADER + stringifySyml(this.data);
  }
}
