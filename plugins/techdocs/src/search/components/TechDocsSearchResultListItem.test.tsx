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

import React from 'react';
import { TechDocsSearchResultListItem } from './TechDocsSearchResultListItem';
import { renderInTestApp } from '@devtools/test-utils';

const validResult = {
  location: 'https://devtools.khulnasoft.com/docs',
  title: 'Documentation',
  text: 'Devtools is an open-source developer portal that puts the developer experience first.',
  kind: 'library',
  namespace: '',
  name: 'Devtools',
  lifecycle: 'production',
};

const validResultWithTitle = {
  location: 'https://devtools.khulnasoft.com/docs',
  title: 'Documentation',
  text: 'Devtools is an open-source developer portal that puts the developer experience first.',
  kind: 'library',
  namespace: '',
  name: 'Devtools',
  entityTitle: 'Devtools App',
  lifecycle: 'production',
};

describe('TechDocsSearchResultListItem test', () => {
  it('should render search doc passed in', async () => {
    const { findByText } = await renderInTestApp(
      <TechDocsSearchResultListItem result={validResult} />,
    );

    expect(
      await findByText('Documentation | Devtools docs'),
    ).toBeInTheDocument();
    expect(
      await findByText(
        'Devtools is an open-source developer portal that puts the developer experience first.',
      ),
    ).toBeInTheDocument();
  });

  it('should use title if defined', async () => {
    const { findByText } = await renderInTestApp(
      <TechDocsSearchResultListItem
        result={validResult}
        title="Count Dookumentation"
      />,
    );

    expect(await findByText('Count Dookumentation')).toBeInTheDocument();
    expect(
      await findByText(
        'Devtools is an open-source developer portal that puts the developer experience first.',
      ),
    ).toBeInTheDocument();
  });

  it('should use entity title if defined', async () => {
    const { findByText } = await renderInTestApp(
      <TechDocsSearchResultListItem result={validResultWithTitle} />,
    );

    expect(
      await findByText('Documentation | Devtools App docs'),
    ).toBeInTheDocument();
  });
});
