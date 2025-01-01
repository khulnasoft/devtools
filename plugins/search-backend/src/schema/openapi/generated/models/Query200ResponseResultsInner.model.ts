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

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { Query200ResponseResultsInnerDocument } from '../models/Query200ResponseResultsInnerDocument.model';

/**
 * @public
 */
export interface Query200ResponseResultsInner {
  /**
   * The \"type\" of the given document.
   */
  type: string;
  document: Query200ResponseResultsInnerDocument;
  /**
   * Optional result highlight. Useful for improving the search result display/experience.
   */
  highlight?: any;
  /**
   * Optional result rank, where 1 is the first/top result returned.  Useful for understanding search effectiveness in analytics.
   */
  rank?: number;
}