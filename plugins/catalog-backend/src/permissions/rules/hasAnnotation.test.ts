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

import { hasAnnotation } from './hasAnnotation';

describe('hasAnnotation permission rule', () => {
  describe('apply', () => {
    it('returns false when specified annotation is not present', () => {
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              annotations: {
                'other-annotation': 'foo',
              },
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
          },
        ),
      ).toEqual(false);
    });

    it('returns false when no annotations are present', () => {
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
          },
        ),
      ).toEqual(false);
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
            value: 'some value',
          },
        ),
      ).toEqual(false);
    });

    it('returns true when specified annotation is present', () => {
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              annotations: {
                'other-annotation': 'foo',
                'devtools.khulnasoft.com/test-annotation': 'bar',
              },
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
          },
        ),
      ).toEqual(true);
    });

    it('returns false when specified annotation has different than expected value', () => {
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              annotations: {
                'other-annotation': 'foo',
                'devtools.khulnasoft.com/test-annotation': 'bar',
              },
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
            value: 'baz',
          },
        ),
      ).toEqual(false);
    });

    it('returns true when specified annotation has expected value', () => {
      expect(
        hasAnnotation.apply(
          {
            apiVersion: 'devtools.khulnasoft.com/v1alpha1',
            kind: 'Component',
            metadata: {
              name: 'test-component',
              annotations: {
                'other-annotation': 'foo',
                'devtools.khulnasoft.com/test-annotation': 'bar',
              },
            },
          },
          {
            annotation: 'devtools.khulnasoft.com/test-annotation',
            value: 'bar',
          },
        ),
      ).toEqual(true);
    });
  });

  describe('toQuery', () => {
    it('returns an appropriate catalog-backend filter', () => {
      expect(
        hasAnnotation.toQuery({
          annotation: 'devtools.khulnasoft.com/test-annotation',
        }),
      ).toEqual({
        key: 'metadata.annotations.devtools.khulnasoft.com/test-annotation',
      });
    });
  });

  it('returns an appropriate catalog-backend filter with values', () => {
    expect(
      hasAnnotation.toQuery({
        annotation: 'devtools.khulnasoft.com/test-annotation',
        value: 'foo',
      }),
    ).toEqual({
      key: 'metadata.annotations.devtools.khulnasoft.com/test-annotation',
      values: ['foo'],
    });
  });
});
