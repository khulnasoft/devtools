<script setup lang="ts">
import _ from 'lodash';
import { ALGORITHM_DESCRIPTIONS } from '../jwt-parser/jwt-parser.constants';
import type { JwtAlgorithm, JwtTimeUnit } from './jwt-generator.constants';
import { JWT_ALGORITHMS, JWT_TIME_UNITS } from './jwt-generator.constants';
import {
  buildRegisteredClaims,
  durationToSeconds,
  generateJwt,
  parseCustomClaimValue,
  toUnixTimestamp,
} from './jwt-generator.service';
import InputCopyable from '@/components/InputCopyable.vue';
import { useCopy } from '@/composable/copy';
import { withDefaultOnError } from '@/utils/defaults';

interface CustomClaim {
  id: number
  key: string
  value: string
}

const algorithm = ref<JwtAlgorithm>('HS256');
const tokenType = ref('JWT');
const keyId = ref('');
const secret = ref('');

const issuer = ref('');
const subject = ref('');
const audience = ref('');
const jwtId = ref('');

const includeIssuedAt = ref(true);
const includeExpiration = ref(true);
const expirationDuration = ref(1);
const expirationUnit = ref<JwtTimeUnit>('hours');
const includeNotBefore = ref(false);
const notBeforeDuration = ref(0);
const notBeforeUnit = ref<JwtTimeUnit>('minutes');

const customClaims = ref<CustomClaim[]>([]);
let nextClaimId = 0;

function addCustomClaim() {
  customClaims.value.push({ id: nextClaimId++, key: '', value: '' });
}

function removeCustomClaim(id: number) {
  customClaims.value = customClaims.value.filter(claim => claim.id !== id);
}

const algorithmOptions = JWT_ALGORITHMS.map(value => ({
  value,
  label: `${value} (${ALGORITHM_DESCRIPTIONS[value]})`,
}));

const timeUnitOptions = Object.keys(JWT_TIME_UNITS).map(value => ({ value, label: value }));

const now = useNow();

function buildTimeBasedClaim({ include, duration, unit }: { include: boolean; duration: number; unit: JwtTimeUnit }) {
  if (!include) {
    return undefined;
  }

  return toUnixTimestamp(now.value) + durationToSeconds({ duration, unit });
}

const claims = computed(() => ({
  ...buildRegisteredClaims({
    issuer: issuer.value,
    subject: subject.value,
    audience: audience.value,
    expiresAt: buildTimeBasedClaim({
      include: includeExpiration.value,
      duration: expirationDuration.value,
      unit: expirationUnit.value,
    }),
    notBefore: buildTimeBasedClaim({
      include: includeNotBefore.value,
      duration: notBeforeDuration.value,
      unit: notBeforeUnit.value,
    }),
    issuedAt: includeIssuedAt.value ? toUnixTimestamp(now.value) : undefined,
    jwtId: jwtId.value,
  }),
  ..._.chain(customClaims.value)
    .filter(({ key }) => !_.isEmpty(key))
    .map(({ key, value }) => [key, parseCustomClaimValue(value)] as const)
    .fromPairs()
    .value(),
}));

const token = computed(() =>
  withDefaultOnError(
    () =>
      generateJwt({
        algorithm: algorithm.value,
        secret: secret.value,
        type: tokenType.value,
        keyId: keyId.value,
        claims: claims.value,
      }),
    '',
  ),
);

const { copy } = useCopy({ source: token, text: 'Token copied to the clipboard' });
</script>

<template>
  <div flex flex-col gap-4>
    <c-card title="Header">
      <div flex gap-2>
        <c-select
          v-model:value="algorithm"
          label="Algorithm"
          :options="algorithmOptions"
          data-test-id="jwt-generator-algorithm"
          flex-1
        />
        <c-input-text
          v-model:value="tokenType"
          label="Type"
          placeholder="JWT"
          raw-text
          clearable
          test-id="jwt-generator-type"
          flex-1
        />
      </div>

      <c-input-text
        v-model:value="keyId"
        label="Key ID"
        placeholder="Optional key identifier stored in the header"
        raw-text
        clearable
        test-id="jwt-generator-key-id"
        mt-3
      />

      <c-input-text
        v-if="algorithm !== 'none'"
        v-model:value="secret"
        label="Secret"
        type="password"
        placeholder="The secret used to sign the token"
        raw-text
        clearable
        test-id="jwt-generator-secret"
        mt-3
      />
      <n-alert v-else type="warning" mt-3>
        An unsecured token is not signed, anybody can read and tamper with its content. Only use it for testing
        purposes.
      </n-alert>
    </c-card>

    <c-card title="Payload">
      <div flex gap-2>
        <c-input-text
          v-model:value="issuer"
          label="Issuer"
          placeholder="iss"
          raw-text
          clearable
          test-id="jwt-generator-issuer"
          flex-1
        />
        <c-input-text
          v-model:value="subject"
          label="Subject"
          placeholder="sub"
          raw-text
          clearable
          test-id="jwt-generator-subject"
          flex-1
        />
      </div>

      <div mt-3 flex gap-2>
        <c-input-text
          v-model:value="audience"
          label="Audience"
          placeholder="aud"
          raw-text
          clearable
          test-id="jwt-generator-audience"
          flex-1
        />
        <c-input-text
          v-model:value="jwtId"
          label="JWT ID"
          placeholder="jti"
          raw-text
          clearable
          test-id="jwt-generator-jwt-id"
          flex-1
        />
      </div>

      <n-divider />

      <n-form-item label="Issued at" label-placement="left">
        <n-switch v-model:value="includeIssuedAt" data-test-id="jwt-generator-include-issued-at" />
      </n-form-item>

      <n-form-item label="Not before" label-placement="left">
        <n-switch v-model:value="includeNotBefore" data-test-id="jwt-generator-include-not-before" />
      </n-form-item>
      <div v-if="includeNotBefore" flex gap-2>
        <n-input-number
          v-model:value="notBeforeDuration"
          :min="0"
          placeholder="Duration"
          data-test-id="jwt-generator-not-before-duration"
          flex-1
        />
        <c-select
          v-model:value="notBeforeUnit"
          :options="timeUnitOptions"
          data-test-id="jwt-generator-not-before-unit"
          flex-1
        />
      </div>

      <n-form-item label="Expiration time" label-placement="left">
        <n-switch v-model:value="includeExpiration" data-test-id="jwt-generator-include-expiration" />
      </n-form-item>
      <div v-if="includeExpiration" flex gap-2>
        <n-input-number
          v-model:value="expirationDuration"
          :min="0"
          placeholder="Duration"
          data-test-id="jwt-generator-expiration-duration"
          flex-1
        />
        <c-select
          v-model:value="expirationUnit"
          :options="timeUnitOptions"
          data-test-id="jwt-generator-expiration-unit"
          flex-1
        />
      </div>

      <n-divider />

      <div flex justify-between>
        <span font-bold> Custom claims </span>
        <c-button size="small" @click="addCustomClaim()">
          <icon-mdi-plus />
          Add claim
        </c-button>
      </div>

      <div v-for="claim of customClaims" :key="claim.id" mt-2 flex gap-2>
        <c-input-text
          :value="claim.key"
          placeholder="Claim name"
          raw-text
          flex-1
          @update:value="(value: string) => (claim.key = value)"
        />
        <c-input-text
          :value="claim.value"
          placeholder="Claim value"
          raw-text
          flex-1
          @update:value="(value: string) => (claim.value = value)"
        />
        <c-button circle variant="text" @click="removeCustomClaim(claim.id)">
          <icon-mdi-delete />
        </c-button>
      </div>
    </c-card>

    <c-card title="Token">
      <InputCopyable :value="token" readonly placeholder="Your token will be here" test-id="jwt-generator-token" />
      <div mt-3 flex justify-center>
        <c-button @click="copy()">
          Copy token
        </c-button>
      </div>
    </c-card>
  </div>
</template>
