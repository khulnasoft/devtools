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
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { Select, SelectItem } from '@devtools/core-components';
import { BaseRepoUrlPickerProps } from './types';
import { useTranslationRef } from '@devtools/core-plugin-api/alpha';
import { scaffolderTranslationRef } from '../../../translation';

export const GithubRepoPicker = (
  props: BaseRepoUrlPickerProps<{
    allowedOwners?: string[];
  }>,
) => {
  const { allowedOwners = [], rawErrors, state, onChange } = props;
  const { t } = useTranslationRef(scaffolderTranslationRef);
  const ownerItems: SelectItem[] = allowedOwners
    ? allowedOwners.map(i => ({ label: i, value: i }))
    : [{ label: 'Loading...', value: 'loading' }];

  const { owner } = state;

  return (
    <>
      <FormControl
        margin="normal"
        required
        error={rawErrors?.length > 0 && !owner}
      >
        {allowedOwners?.length ? (
          <>
            <Select
              native
              label={t('fields.githubRepoPicker.owner.title')}
              onChange={s =>
                onChange({ owner: String(Array.isArray(s) ? s[0] : s) })
              }
              disabled={allowedOwners.length === 1}
              selected={owner}
              items={ownerItems}
            />
            <FormHelperText>
              {t('fields.githubRepoPicker.owner.description')}
            </FormHelperText>
          </>
        ) : (
          <TextField
            id="ownerInput"
            label={t('fields.githubRepoPicker.owner.inputTitle')}
            onChange={e => onChange({ owner: e.target.value })}
            helperText={t('fields.githubRepoPicker.owner.description')}
            value={owner}
          />
        )}
      </FormControl>
    </>
  );
};
