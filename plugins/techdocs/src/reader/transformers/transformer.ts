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

export type Transformer = (dom: Element) => Element | Promise<Element>;

export const transform = async (
  html: string | Element,
  transformers: Transformer[],
): Promise<Element> => {
  let dom: Element;

  if (typeof html === 'string') {
    dom = new DOMParser().parseFromString(html, 'text/html').documentElement;
  } else if (html instanceof Element) {
    dom = html;
  } else {
    throw new Error('dom is not a recognized type');
  }

  for (const transformer of transformers) {
    dom = await transformer(dom);
  }

  return dom;
};
