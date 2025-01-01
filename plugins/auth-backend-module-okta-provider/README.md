# Auth Module: Okta Provider

This module provides an Okta auth provider implementation for `@devtools/plugin-auth-backend`.

## Utilization

This module is used in `auth-backend/src/providers/okta`

```ts
import { oktaAuthenticator } from '@devtools/plugin-auth-backend-module-okta-provider';

export const okta = createAuthProviderIntegration({
  create({
    authHandler?: AuthHandler<OAuthResult>,

    signIn?: {
      resolver: SignInResolver<OAuthResult>,
    },
  }) {
    return createOAuthProviderFactory({
      authenticator: oktaAuthenticator,
    });
  },
});
```

## Links

- [Repository](https://okta.com/khulnasoft/devtools/tree/master/plugins/auth-backend-module-okta-provider)
- [Devtools Project Homepage](https://devtools.khulnasoft.com)
