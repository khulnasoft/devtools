## API Report File for "@devtools/plugin-scaffolder-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { ConditionalPolicyDecision } from '@devtools/plugin-permission-common';
import { Conditions } from '@devtools/plugin-permission-node';
import { JsonObject } from '@devtools/types';
import { PermissionCondition } from '@devtools/plugin-permission-common';
import { PermissionCriteria } from '@devtools/plugin-permission-common';
import { PermissionRule } from '@devtools/plugin-permission-node';
import { ResourcePermission } from '@devtools/plugin-permission-common';
import { TemplateEntityStepV1beta3 } from '@devtools/plugin-scaffolder-common';
import { TemplateParametersV1beta3 } from '@devtools/plugin-scaffolder-common';

// @alpha (undocumented)
export const createScaffolderActionConditionalDecision: (
  permission: ResourcePermission<'scaffolder-action'>,
  conditions: PermissionCriteria<PermissionCondition<'scaffolder-action'>>,
) => ConditionalPolicyDecision;

// @alpha
export const createScaffolderTemplateConditionalDecision: (
  permission: ResourcePermission<'scaffolder-template'>,
  conditions: PermissionCriteria<PermissionCondition<'scaffolder-template'>>,
) => ConditionalPolicyDecision;

// @alpha (undocumented)
const _feature: BackendFeature;
export default _feature;

// @alpha
export const scaffolderActionConditions: Conditions<{
  hasActionId: PermissionRule<
    {
      action: string;
      input: JsonObject | undefined;
    },
    {},
    'scaffolder-action',
    {
      actionId: string;
    }
  >;
  hasBooleanProperty: PermissionRule<
    {
      action: string;
      input: JsonObject | undefined;
    },
    {},
    'scaffolder-action',
    {
      key: string;
      value?: boolean | undefined;
    }
  >;
  hasNumberProperty: PermissionRule<
    {
      action: string;
      input: JsonObject | undefined;
    },
    {},
    'scaffolder-action',
    {
      key: string;
      value?: number | undefined;
    }
  >;
  hasStringProperty: PermissionRule<
    {
      action: string;
      input: JsonObject | undefined;
    },
    {},
    'scaffolder-action',
    {
      key: string;
      value?: string | undefined;
    }
  >;
}>;

// @alpha
export const scaffolderTemplateConditions: Conditions<{
  hasTag: PermissionRule<
    TemplateParametersV1beta3 | TemplateEntityStepV1beta3,
    {},
    'scaffolder-template',
    {
      tag: string;
    }
  >;
}>;

// (No @packageDocumentation comment for this package)
```
