/*
 * Copyright 2021 The Devtools Authors
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

import { createMockActionContext } from '@devtools/plugin-scaffolder-node-test-utils';

jest.mock('@devtools/plugin-scaffolder-node', () => {
  const actual = jest.requireActual('@devtools/plugin-scaffolder-node');
  return { ...actual, fetchFile: jest.fn() };
});

import yaml from 'yaml';
import { resolve as resolvePath } from 'path';
import { ConfigReader } from '@devtools/config';
import { ScmIntegrations } from '@devtools/integration';
import { createFetchPlainFileAction } from './plainFile';
import { fetchFile } from '@devtools/plugin-scaffolder-node';
import { examples } from './plainFile.examples';
import { UrlReaderService } from '@devtools/backend-plugin-api';

describe('fetch:plain:file examples', () => {
  const integrations = ScmIntegrations.fromConfig(
    new ConfigReader({
      integrations: {
        github: [{ host: 'github.com', token: 'token' }],
      },
    }),
  );
  const reader: UrlReaderService = {
    readUrl: jest.fn(),
    readTree: jest.fn(),
    search: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  const action = createFetchPlainFileAction({ integrations, reader });
  const mockContext = createMockActionContext();

  it('should fetch plain', async () => {
    await action.handler({
      ...mockContext,
      input: yaml.parse(examples[0].example).steps[0].input,
    });
    expect(fetchFile).toHaveBeenCalledWith(
      expect.objectContaining({
        outputPath: resolvePath(mockContext.workspacePath, 'target-path'),
        fetchUrl:
          'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets/Devtools%20Community%20Sessions.png',
      }),
    );
  });
});