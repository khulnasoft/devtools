## API Report File for "@devtools/plugin-auth-backend-module-auth0-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { OAuthAuthenticator } from '@devtools/plugin-auth-node';
import { PassportOAuthAuthenticatorHelper } from '@devtools/plugin-auth-node';
import { PassportProfile } from '@devtools/plugin-auth-node';

// @public (undocumented)
export const auth0Authenticator: OAuthAuthenticator<
  {
    helper: PassportOAuthAuthenticatorHelper;
    audience: string | undefined;
    connection: string | undefined;
    connectionScope: string | undefined;
  },
  PassportProfile
>;

// @public (undocumented)
const authModuleAuth0Provider: BackendFeature;
export default authModuleAuth0Provider;
```
