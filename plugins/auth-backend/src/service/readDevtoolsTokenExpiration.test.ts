/*
 * Copyright 2024 The Devtools Authors
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

import { ConfigReader } from '@devtools/config';
import { readDevtoolsTokenExpiration } from './readDevtoolsTokenExpiration';

describe('Test for default devtools token expiry time', () => {
  it('Will return default devtools session expiration', () => {
    const config = new ConfigReader({
      app: {
        baseUrl: 'http://example.com/extra-path',
      },
    });
    expect(readDevtoolsTokenExpiration(config)).toBe(3600);
  });

  it('Will return user defined 120 minutes as devtools session expiration', () => {
    const config = new ConfigReader({
      app: {
        baseUrl: 'http://example.com/extra-path',
      },
      auth: {
        devtoolsTokenExpiration: { minutes: 120 },
      },
    });
    expect(readDevtoolsTokenExpiration(config)).toBe(7200);
  });

  it('Will return minimum duration of 10 minutes as devtools session expiration', () => {
    const config = new ConfigReader({
      app: {
        baseUrl: 'http://example.com/extra-path',
      },
      auth: {
        devtoolsTokenExpiration: { minutes: 2 },
      },
    });
    expect(readDevtoolsTokenExpiration(config)).toBe(600);
  });

  it('Will return user configured value as devtools session expiration', () => {
    const config = new ConfigReader({
      app: {
        baseUrl: 'http://example.com/extra-path',
      },
      auth: {
        devtoolsTokenExpiration: { minutes: 20 },
      },
    });
    expect(readDevtoolsTokenExpiration(config)).toBe(1200);
  });

  it('Will return maximum of 24 hour as devtools session expiration if user configured value is more than a day', () => {
    const config = new ConfigReader({
      app: {
        baseUrl: 'http://example.com/extra-path',
      },
      auth: {
        devtoolsTokenExpiration: { minutes: 1500 },
      },
    });
    expect(readDevtoolsTokenExpiration(config)).toBe(86400);
  });
});
