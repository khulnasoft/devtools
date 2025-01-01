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

import { Overrides } from '@material-ui/core/styles/overrides';
import { StyleRules } from '@material-ui/core/styles/withStyles';
import { FeaturedDocsCardClassKey } from './homePageComponents/FeaturedDocsCard';

/** @public */
export type CatalogReactComponentsNameToClassKey = {
  HomeFeaturedDocsCard: FeaturedDocsCardClassKey;
};

/** @public */
export type DevtoolsOverrides = Overrides & {
  [Name in keyof CatalogReactComponentsNameToClassKey]?: Partial<
    StyleRules<CatalogReactComponentsNameToClassKey[Name]>
  >;
};

declare module '@devtools/theme' {
  interface OverrideComponentNameToClassKeys
    extends CatalogReactComponentsNameToClassKey {}
}