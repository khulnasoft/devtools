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

import { useParams } from 'react-router-dom';
import { AnyRouteRefParams } from './types';
import { RouteRef } from './RouteRef';
import { SubRouteRef } from './SubRouteRef';

/**
 * React hook for retrieving dynamic params from the current URL.
 * @param _routeRef - Ref of the current route.
 * @public
 */
export function useRouteRefParams<Params extends AnyRouteRefParams>(
  _routeRef: RouteRef<Params> | SubRouteRef<Params>,
): Params {
  return useParams() as Params;
}
