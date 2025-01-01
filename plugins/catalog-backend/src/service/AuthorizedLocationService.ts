/*
 * Copyright 2022 The Devtools Authors
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

import { Location } from '@devtools/catalog-client';
import { CompoundEntityRef, Entity } from '@devtools/catalog-model';
import { NotAllowedError, NotFoundError } from '@devtools/errors';
import {
  catalogLocationCreatePermission,
  catalogLocationDeletePermission,
  catalogLocationReadPermission,
} from '@devtools/plugin-catalog-common/alpha';
import { AuthorizeResult } from '@devtools/plugin-permission-common';
import { LocationInput, LocationService } from './types';
import {
  DevtoolsCredentials,
  PermissionsService,
} from '@devtools/backend-plugin-api';

export class AuthorizedLocationService implements LocationService {
  constructor(
    private readonly locationService: LocationService,
    private readonly permissionApi: PermissionsService,
  ) {}

  async createLocation(
    spec: LocationInput,
    dryRun: boolean,
    options: {
      credentials: DevtoolsCredentials;
    },
  ): Promise<{
    location: Location;
    entities: Entity[];
    exists?: boolean | undefined;
  }> {
    const authorizationResponse = (
      await this.permissionApi.authorize(
        [{ permission: catalogLocationCreatePermission }],
        { credentials: options.credentials },
      )
    )[0];

    if (authorizationResponse.result === AuthorizeResult.DENY) {
      throw new NotAllowedError();
    }

    return this.locationService.createLocation(spec, dryRun, options);
  }

  async listLocations(options: {
    credentials: DevtoolsCredentials;
  }): Promise<Location[]> {
    const authorizationResponse = (
      await this.permissionApi.authorize(
        [{ permission: catalogLocationReadPermission }],
        { credentials: options.credentials },
      )
    )[0];

    if (authorizationResponse.result === AuthorizeResult.DENY) {
      return [];
    }

    return this.locationService.listLocations(options);
  }

  async getLocation(
    id: string,
    options: { credentials: DevtoolsCredentials },
  ): Promise<Location> {
    const authorizationResponse = (
      await this.permissionApi.authorize(
        [{ permission: catalogLocationReadPermission }],
        { credentials: options.credentials },
      )
    )[0];

    if (authorizationResponse.result === AuthorizeResult.DENY) {
      throw new NotFoundError(`Found no location with ID ${id}`);
    }

    return this.locationService.getLocation(id, options);
  }

  async deleteLocation(
    id: string,
    options: { credentials: DevtoolsCredentials },
  ): Promise<void> {
    const authorizationResponse = (
      await this.permissionApi.authorize(
        [{ permission: catalogLocationDeletePermission }],
        { credentials: options.credentials },
      )
    )[0];

    if (authorizationResponse.result === AuthorizeResult.DENY) {
      throw new NotAllowedError();
    }

    return this.locationService.deleteLocation(id, options);
  }

  async getLocationByEntity(
    entityRef: CompoundEntityRef | string,
    options: { credentials: DevtoolsCredentials },
  ): Promise<Location> {
    const authorizationResponse = (
      await this.permissionApi.authorize(
        [{ permission: catalogLocationReadPermission }],
        { credentials: options.credentials },
      )
    )[0];

    if (authorizationResponse.result === AuthorizeResult.DENY) {
      throw new NotFoundError();
    }
    return this.locationService.getLocationByEntity(entityRef, options);
  }
}
