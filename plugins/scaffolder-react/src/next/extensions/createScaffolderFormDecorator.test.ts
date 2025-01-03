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
import { createScaffolderFormDecorator } from './createScaffolderFormDecorator';

describe('createScaffolderFormDecorator', () => {
  it('should return a decorator', () => {
    const decorator = createScaffolderFormDecorator({
      id: 'test',
      deps: {},
      decorator: async () => {},
    });

    expect(decorator).toMatchInlineSnapshot(`
      {
        "$$type": "@devtools/scaffolder/FormDecorator",
        "TInput": null,
        "decorator": [Function],
        "deps": {},
        "id": "test",
        "version": "v1",
      }
    `);
  });

  it('should allow passing schema and be typesafe', () => {
    const decorator = createScaffolderFormDecorator({
      id: 'test',
      deps: {},
      schema: {
        input: {
          name: z => z.string(),
          age: z => z.number(),
        },
      },
      decorator: async ctx => {
        const name: string = ctx.input.name;

        // @ts-expect-error
        const number: string = ctx.input.age;

        expect([name, number]).toBeDefined();
      },
    });

    expect(decorator).toMatchInlineSnapshot(`
      {
        "$$type": "@devtools/scaffolder/FormDecorator",
        "TInput": null,
        "decorator": [Function],
        "deps": {},
        "id": "test",
        "schema": {
          "input": {
            "age": [Function],
            "name": [Function],
          },
        },
        "version": "v1",
      }
    `);
  });
});
