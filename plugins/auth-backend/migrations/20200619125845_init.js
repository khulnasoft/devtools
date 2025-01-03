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

// @ts-check

/**
 * @param {import('knex').Knex} knex
 */
exports.up = async function up(knex) {
  return knex.schema.createTable('signing_keys', table => {
    table.comment(
      'Signing keys that are currently in use or have recently been used to issue tokens',
    );
    table
      .string('kid')
      .primary()
      .notNullable()
      .comment('ID of the signing key');
    table
      .timestamp('created_at', { useTz: false, precision: 0 })
      .notNullable()
      .defaultTo(knex.fn.now())
      .comment('The creation time of the key');
    table.string('key').notNullable().comment('The serialized signing key');
  });
};

/**
 * @param {import('knex').Knex} knex
 */
exports.down = async function down(knex) {
  return knex.schema.dropTable('auth_keystore');
};
