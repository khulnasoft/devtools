/*
 * Copyright 2022 The Devtools Authors
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

import React, { FC, PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react';

import { ConfigReader } from '@devtools/core-app-api';
import { ConfigApi, configApiRef } from '@devtools/core-plugin-api';
import { TestApiProvider } from '@devtools/test-utils';

import { useSanitizerTransformer } from './transformer';

const configApiMock: ConfigApi = new ConfigReader({
  techdocs: {
    sanitizer: {
      allowedCustomElementTagNameRegExp: '^devtools-',
      allowedCustomElementAttributeNameRegExp: 'attribute1|attribute2',
    },
  },
});

const wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <TestApiProvider apis={[[configApiRef, configApiMock]]}>
    {children}
  </TestApiProvider>
);

describe('Transformers > Html > Sanitizer Custom Elements', () => {
  it('should return a function that allows custom elements matching the pattern in the given dom element', async () => {
    const { result } = renderHook(() => useSanitizerTransformer(), { wrapper });

    const dirtyDom = document.createElement('html');
    dirtyDom.innerHTML = `
      <body>
        <devtools-element attribute1="test" attribute2></devtools-element>
      </body>
    `;
    const clearDom = await result.current(dirtyDom); // calling html transformer

    const elements = Array.from(
      clearDom.querySelectorAll<HTMLElement>('body > devtools-element'),
    );
    expect(elements).toHaveLength(1);
    expect(elements[0].hasAttribute('attribute1')).toEqual(true);
    expect(elements[0].hasAttribute('attribute2')).toEqual(true);
  });

  it('should return a function that removes custom elements not matching the pattern in the given dom element', async () => {
    const { result } = renderHook(() => useSanitizerTransformer(), { wrapper });

    const dirtyDom = document.createElement('html');
    dirtyDom.innerHTML = `
      <body>
        <devtools-element attribute1="test" attribute2></devtools-element>
        <invalid-element attribute1="test" attribute2></invalid-element>
      </body>
    `;
    const clearDom = await result.current(dirtyDom); // calling html transformer

    const elements = Array.from(
      clearDom.querySelectorAll<HTMLElement>('body > devtools-element'),
    );
    expect(elements).toHaveLength(1);
    expect(elements[0].hasAttribute('attribute1')).toEqual(true);
    expect(elements[0].hasAttribute('attribute2')).toEqual(true);
  });

  it('should return a function that removes custom element attributes not matching the pattern in the given dom element', async () => {
    const { result } = renderHook(() => useSanitizerTransformer(), { wrapper });

    const dirtyDom = document.createElement('html');
    dirtyDom.innerHTML = `
      <body>
        <devtools-element attribute1="test" attribute2></devtools-element>
        <devtools-element attribute3="test" attribute4></devtools-element>
      </body>
    `;
    const clearDom = await result.current(dirtyDom); // calling html transformer

    const elements = Array.from(
      clearDom.querySelectorAll<HTMLElement>('body > devtools-element'),
    );
    expect(elements).toHaveLength(2);
    expect(elements[0].hasAttribute('attribute1')).toEqual(true);
    expect(elements[0].hasAttribute('attribute2')).toEqual(true);
    expect(elements[1].hasAttribute('attribute3')).toEqual(false);
    expect(elements[1].hasAttribute('attribute4')).toEqual(false);
  });
});
