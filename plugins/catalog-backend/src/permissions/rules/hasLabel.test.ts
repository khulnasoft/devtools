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

import { hasLabel } from './hasLabel';

describe('hasLabel permission rule', () => {
  describe('apply', () => {
    it('returns false when specified label is not present', () => {
      expect(
        hasLabel.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              labels: {
                somelabel: 'foo',
              },
            },
          },
          {
            label: 'devtools.khulnasoft.com/testlabel',
          },
        ),
      ).toEqual(false);
    });

    it('returns false when no annotations are present', () => {
      expect(
        hasLabel.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
            },
          },
          {
            label: 'devtools.khulnasoft.com/testlabel',
          },
        ),
      ).toEqual(false);
    });

    it('returns true when specified annotation is present', () => {
      expect(
        hasLabel.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              labels: {
                somelabel: 'foo',
                'devtools.khulnasoft.com/testlabel': 'bar',
              },
            },
          },
          { label: 'devtools.khulnasoft.com/testlabel' },
        ),
      ).toEqual(true);
    });
  });

  describe('toQuery', () => {
    it('returns an appropriate catalog-backend filter', () => {
      expect(
        hasLabel.toQuery({
          label: 'devtools.khulnasoft.com/testlabel',
        }),
      ).toEqual({
        key: 'metadata.labels.devtools.khulnasoft.com/testlabel',
      });
    });
  });
});
