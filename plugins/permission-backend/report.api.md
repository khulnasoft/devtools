## API Report File for "@devtools/plugin-permission-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@devtools/backend-plugin-api';
import { BackendFeature } from '@devtools/backend-plugin-api';
import { DiscoveryService } from '@devtools/backend-plugin-api';
import express from 'express';
import { HttpAuthService } from '@devtools/backend-plugin-api';
import { IdentityApi } from '@devtools/plugin-auth-node';
import { LoggerService } from '@devtools/backend-plugin-api';
import { PermissionPolicy } from '@devtools/plugin-permission-node';
import { RootConfigService } from '@devtools/backend-plugin-api';
import { UserInfoService } from '@devtools/backend-plugin-api';

// @public @deprecated
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public
const permissionPlugin: BackendFeature;
export default permissionPlugin;

// @public @deprecated
export interface RouterOptions {
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  config: RootConfigService;
  // (undocumented)
  discovery: DiscoveryService;
  // (undocumented)
  httpAuth?: HttpAuthService;
  // (undocumented)
  identity?: IdentityApi;
  // (undocumented)
  logger: LoggerService;
  // (undocumented)
  policy: PermissionPolicy;
  // (undocumented)
  userInfo?: UserInfoService;
}
```