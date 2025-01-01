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

import React from 'react';
import { renderInTestApp } from '@devtools/test-utils';
import { EmptyStateImage } from './EmptyStateImage';
import { screen } from '@testing-library/react';

describe('<EmptyStateImage />', () => {
  it('render EmptyStateImage component with missing field', async () => {
    await renderInTestApp(<EmptyStateImage missing="field" />);
    expect(screen.getByAltText('annotation is missing')).toBeInTheDocument();
  });

  it('render EmptyStateImage component with missing info', async () => {
    await renderInTestApp(<EmptyStateImage missing="info" />);
    expect(screen.getByAltText('no Information')).toBeInTheDocument();
  });

  it('render EmptyStateImage component with missing content', async () => {
    await renderInTestApp(<EmptyStateImage missing="content" />);
    expect(screen.getByAltText('create Component')).toBeInTheDocument();
  });

  it('render EmptyStateImage component with missing data', async () => {
    await renderInTestApp(<EmptyStateImage missing="data" />);
    expect(screen.getByAltText('no Build')).toBeInTheDocument();
  });
});
