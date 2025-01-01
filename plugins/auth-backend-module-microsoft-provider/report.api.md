## API Report File for "@devtools/plugin-auth-backend-module-microsoft-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@devtools/backend-plugin-api';
import { OAuthAuthenticator } from '@devtools/plugin-auth-node';
import { OAuthAuthenticatorResult } from '@devtools/plugin-auth-node';
import { PassportOAuthAuthenticatorHelper } from '@devtools/plugin-auth-node';
import { PassportProfile } from '@devtools/plugin-auth-node';
import { SignInResolverFactory } from '@devtools/plugin-auth-node';

// @public @deprecated (undocumented)
export const authModuleMicrosoftProvider: BackendFeature;

// @public (undocumented)
const authModuleMicrosoftProvider_2: BackendFeature;
export default authModuleMicrosoftProvider_2;

// @public (undocumented)
export const microsoftAuthenticator: OAuthAuthenticator<
  {
    helper: PassportOAuthAuthenticatorHelper;
    domainHint: string | undefined;
  },
  PassportProfile
>;

// @public
export namespace microsoftSignInResolvers {
  const emailMatchingUserEntityAnnotation: SignInResolverFactory<
    OAuthAuthenticatorResult<PassportProfile>,
    unknown
  >;
  const userIdMatchingUserEntityAnnotation: SignInResolverFactory<
    OAuthAuthenticatorResult<PassportProfile>,
    unknown
  >;
}
```