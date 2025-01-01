# @devtools/no-forbidden-package-imports

Disallow internal monorepo imports from package subpaths that are not exported.

## Usage

Add the rules as follows, it has no options:

```js
"@devtools/no-forbidden-package-imports": ["error"]
```

## Rule Details

Given the following two target packages:

```json
{
  "name": "@devtools/plugin-foo",
  "files": ["dist", "type-utils"]
}
```

```json
{
  "name": "@devtools/plugin-bar",
  "exports": {
    ".": "./src/index.ts",
    "./testUtils": "./src/testUtils/index.ts",
    "./package.json": "./package.json"
  }
}
```

### Fail

```ts
import { FooCard } from '@devtools/plugin-foo/src/components';
import { BarCard } from '@devtools/plugin-bar/src/components';
```

### Pass

```ts
import { FooCard } from '@devtools/plugin-foo';
import { FooType } from '@devtools/plugin-foo/type-utils';
import fooPkg from '@devtools/plugin-foo/package.json';

import { BarCard } from '@devtools/plugin-bar';
import { renderBarCardExtension } from '@devtools/plugin-bar/testUtils';
import barPkg from '@devtools/plugin-bar/package.json';
```
