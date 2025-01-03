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

export const DB_MIGRATIONS_TABLE = 'incremental_ingestion__knex_migrations';

/**
 * The shape of data inserted into or updated in the `ingestions` table.
 */
export interface IngestionUpsert {
  /**
   * The ingestion record id.
   */
  id?: string;
  /**
   * The next action the incremental entity provider will take.
   */
  next_action:
    | 'rest'
    | 'ingest'
    | 'backoff'
    | 'cancel'
    | 'nothing (done)'
    | 'nothing (canceled)';
  /**
   * Current status of the incremental entity provider.
   */
  status:
    | 'complete'
    | 'bursting'
    | 'resting'
    | 'canceling'
    | 'interstitial'
    | 'backing off';
  /**
   * The name of the incremental entity provider being updated.
   */
  provider_name: string;
  /**
   * Date/time stamp for when the next action will trigger.
   */
  next_action_at?: Date;
  /**
   * A record of the last error generated by the incremental entity provider.
   */
  last_error?: string | null;
  /**
   * The number of attempts the provider has attempted during the current cycle.
   */
  attempts?: number;
  /**
   * Date/time stamp for the completion of ingestion.
   */
  ingestion_completed_at?: Date | string | null;
  /**
   * Date/time stamp for the end of the rest cycle before the next ingestion.
   */
  rest_completed_at?: Date | string | null;
  /**
   * A record of the finalized status of the ingestion record. Values are either 'open' or a uuid.
   */
  completion_ticket: string;
}

/**
 * This interface is for updating an existing ingestion record.
 */
export interface IngestionRecordUpdate {
  ingestionId: string;
  update: Partial<IngestionUpsert>;
}

/**
 * The expected response from the `ingestion_marks` table.
 */
export interface MarkRecord {
  id: string;
  sequence: number;
  ingestion_id: string;
  cursor: unknown;
  created_at: string;
}

/**
 * The expected response from the `ingestions` table.
 */
export interface IngestionRecord extends IngestionUpsert {
  id: string;
  next_action_at: Date;
  /**
   * The date/time the ingestion record was created.
   */
  created_at: string;
}

/**
 * This interface supplies all the values for adding an ingestion mark.
 */
export interface MarkRecordInsert {
  record: {
    id: string;
    ingestion_id: string;
    cursor: unknown;
    sequence: number;
  };
}
