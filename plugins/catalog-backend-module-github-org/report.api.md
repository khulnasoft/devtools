## API Report File for "@devtools/plugin-catalog-backend-module-github-org"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { ExtensionPoint } from '@devtools/backend-plugin-api';
import { GithubMultiOrgEntityProvider } from '@devtools/plugin-catalog-backend-module-github';
import { TeamTransformer } from '@devtools/plugin-catalog-backend-module-github';
import { UserTransformer } from '@devtools/plugin-catalog-backend-module-github';

// @public
const catalogModuleGithubOrgEntityProvider: BackendFeature;
export default catalogModuleGithubOrgEntityProvider;

export { GithubMultiOrgEntityProvider };

// @public
export interface GithubOrgEntityProviderTransformsExtensionPoint {
  setTeamTransformer(transformer: TeamTransformer): void;
  setUserTransformer(transformer: UserTransformer): void;
}

// @public
export const githubOrgEntityProviderTransformsExtensionPoint: ExtensionPoint<GithubOrgEntityProviderTransformsExtensionPoint>;

export { TeamTransformer };

export { UserTransformer };
```
