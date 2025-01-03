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

jest.mock('@devtools/plugin-scaffolder-node', () => {
  const actual = jest.requireActual('@devtools/plugin-scaffolder-node');
  return { ...actual, fetchContents: jest.fn() };
});

import { resolve as resolvePath } from 'path';
import { createMockActionContext } from '@devtools/plugin-scaffolder-node-test-utils';
import { ConfigReader } from '@devtools/config';
import { ScmIntegrations } from '@devtools/integration';
import { fetchContents } from '@devtools/plugin-scaffolder-node';
import { createFetchPlainAction } from './plain';
import { UrlReaderService } from '@devtools/backend-plugin-api';

describe('fetch:plain', () => {
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

  const action = createFetchPlainAction({ integrations, reader });
  const mockContext = createMockActionContext();

  it('should disallow a target path outside working directory', async () => {
    await expect(
      action.handler({
        ...mockContext,
        input: {
          url: 'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets',
          targetPath: '/foobar',
        },
      }),
    ).rejects.toThrow(
      /Relative path is not allowed to refer to a directory outside its parent/,
    );
  });

  it('should fetch plain', async () => {
    await action.handler({
      ...mockContext,
      input: {
        url: 'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets',
        targetPath: 'lol',
      },
    });

    expect(fetchContents).toHaveBeenCalledWith(
      expect.objectContaining({
        outputPath: resolvePath(mockContext.workspacePath, 'lol'),
        fetchUrl:
          'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets',
      }),
    );
  });

  it('should fetch plain with token', async () => {
    await action.handler({
      ...mockContext,
      input: {
        url: 'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets',
        targetPath: 'lol',
        token: 'mockToken',
      },
    });

    expect(fetchContents).toHaveBeenCalledWith(
      expect.objectContaining({
        outputPath: resolvePath(mockContext.workspacePath, 'lol'),
        fetchUrl:
          'https://github.com/khulnasoft/community/tree/main/devtools-community-sessions/assets',
      }),
    );
  });
});
