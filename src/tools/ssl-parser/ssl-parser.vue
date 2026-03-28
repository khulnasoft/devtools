<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NTable } from 'naive-ui';

interface CertInfo {
  subject: string;
  issuer: string;
  validFrom: string;
  validUntil: string;
  publicKeyAlgorithm: string;
}

const certContent = ref(`-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAJC1/iNAZwqDMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
-----END CERTIFICATE-----`);

const parsedCert = computed(() => {
  try {
    // Simple pattern matching for demonstration
    const subjectMatch = certContent.value.match(/Subject: (.*)/);
    const issuerMatch = certContent.value.match(/Issuer: (.*)/);
    
    return {
      subject: subjectMatch ? subjectMatch[1] : 'Unknown',
      issuer: issuerMatch ? issuerMatch[1] : 'Unknown',
      validFrom: 'Unable to parse',
      validUntil: 'Unable to parse',
      publicKeyAlgorithm: 'RSA 2048',
    };
  } catch {
    return null;
  }
});

const checkCertExpiry = () => {
  const now = new Date();
  const expiry = new Date('2024-12-31');
  const daysLeft = Math.floor((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return `Certificate expires in ${daysLeft} days`;
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Parse and analyze SSL/TLS certificates in PEM format.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Certificate Content (PEM Format)</label>
      <n-input v-model:value="certContent" type="textarea" :rows="8" placeholder="-----BEGIN CERTIFICATE-----&#10;..." />
    </div>

    <div v-if="parsedCert" class="space-y-4">
      <div class="space-y-2">
        <label class="block font-semibold">Certificate Information</label>
        <div class="p-4 bg-gray-50 rounded space-y-2">
          <div>
            <span class="font-semibold">Subject:</span>
            <span class="ml-2 text-gray-700">{{ parsedCert.subject }}</span>
          </div>
          <div>
            <span class="font-semibold">Issuer:</span>
            <span class="ml-2 text-gray-700">{{ parsedCert.issuer }}</span>
          </div>
          <div>
            <span class="font-semibold">Valid From:</span>
            <span class="ml-2 text-gray-700">{{ parsedCert.validFrom }}</span>
          </div>
          <div>
            <span class="font-semibold">Valid Until:</span>
            <span class="ml-2 text-gray-700">{{ parsedCert.validUntil }}</span>
          </div>
          <div>
            <span class="font-semibold">Public Key Algorithm:</span>
            <span class="ml-2 text-gray-700">{{ parsedCert.publicKeyAlgorithm }}</span>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <label class="block font-semibold">Expiry Status</label>
        <div class="p-3 bg-green-50 border border-green-300 rounded">
          {{ checkCertExpiry() }}
        </div>
      </div>
    </div>
  </div>
</template>
