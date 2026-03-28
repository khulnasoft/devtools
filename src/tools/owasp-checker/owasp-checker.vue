<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NAlert, NIcon, NProgress } from 'naive-ui';
import { CheckCircle, AlertCircle, AlertTriangle } from '@vicons/tabler';

interface Vulnerability {
  type: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  recommendation: string;
}

const codeContent = ref(`const user = req.query.username;
const query = "SELECT * FROM users WHERE name = '" + user + "'";
db.execute(query);`);

const vulnerabilities = computed(() => {
  const issues: Vulnerability[] = [];

  if (codeContent.value.includes("' + ") || codeContent.value.includes('+ "')) {
    issues.push({
      type: 'SQL Injection',
      severity: 'high',
      description: 'String concatenation for SQL queries detected',
      recommendation: 'Use parameterized queries or prepared statements',
    });
  }

  if (codeContent.value.includes('innerHTML') || codeContent.value.includes('dangerouslySetInnerHTML')) {
    issues.push({
      type: 'XSS Vulnerability',
      severity: 'high',
      description: 'Dangerous HTML injection detected',
      recommendation: 'Use textContent or sanitize user input',
    });
  }

  if (codeContent.value.includes('eval(')) {
    issues.push({
      type: 'Code Injection',
      severity: 'high',
      description: 'eval() usage detected',
      recommendation: 'Avoid eval() completely, use safer alternatives',
    });
  }

  if (codeContent.value.toLowerCase().includes('password') && !codeContent.value.includes('hash')) {
    issues.push({
      type: 'Weak Cryptography',
      severity: 'high',
      description: 'Plain text password handling detected',
      recommendation: 'Use bcrypt or Argon2 for password hashing',
    });
  }

  if (!codeContent.value.includes('HTTPS') && codeContent.value.includes('fetch')) {
    issues.push({
      type: 'Insecure Transport',
      severity: 'medium',
      description: 'HTTP usage without explicit HTTPS mention',
      recommendation: 'Ensure all external API calls use HTTPS',
    });
  }

  return issues;
});

const riskScore = computed(() => {
  const highCount = vulnerabilities.value.filter((v) => v.severity === 'high').length;
  const mediumCount = vulnerabilities.value.filter((v) => v.severity === 'medium').length;
  return Math.min(100, highCount * 30 + mediumCount * 10);
});

const getSeverityIcon = (severity: string) => {
  return severity === 'high' ? AlertTriangle : AlertCircle;
};
</script>

<template>
  <div class="space-y-4">
    <n-alert type="warning" closable>
      Check code for OWASP Top 10 vulnerabilities and security issues.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Code to Analyze</label>
      <n-input v-model:value="codeContent" type="textarea" :rows="8" placeholder="Paste code to check..." />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Security Risk Score</label>
      <n-progress :percentage="riskScore" :color="riskScore > 70 ? '#f23645' : '#f0a020'" />
      <span class="text-sm text-gray-600">{{ riskScore }}/100 Risk Level</span>
    </div>

    <div v-if="vulnerabilities.length > 0" class="space-y-3">
      <label class="block font-semibold">Detected Issues ({{ vulnerabilities.length }})</label>
      <div v-for="(vuln, i) in vulnerabilities" :key="i" class="p-4 rounded border"
        :class="{
          'bg-red-50 border-red-300': vuln.severity === 'high',
          'bg-yellow-50 border-yellow-300': vuln.severity === 'medium',
          'bg-blue-50 border-blue-300': vuln.severity === 'low',
        }">
        <div class="flex items-start gap-2 mb-2">
          <n-icon :component="getSeverityIcon(vuln.severity)" />
          <div>
            <div class="font-semibold">{{ vuln.type }}</div>
            <div class="text-sm text-gray-700 capitalize">{{ vuln.severity }} Severity</div>
          </div>
        </div>
        <div class="text-sm mb-2">{{ vuln.description }}</div>
        <div class="text-sm font-semibold">Recommendation:</div>
        <div class="text-sm">{{ vuln.recommendation }}</div>
      </div>
    </div>

    <div v-else class="p-4 bg-green-50 border border-green-300 rounded flex items-center gap-2">
      <n-icon :component="CheckCircle" />
      <span>No security issues detected in the code sample.</span>
    </div>
  </div>
</template>
