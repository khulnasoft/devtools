<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NButton, NSelect, NAlert, NSpace, NCheckbox } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const minute = ref('*');
const hour = ref('*');
const dayOfMonth = ref('*');
const month = ref('*');
const dayOfWeek = ref('*');

const preset = ref('custom');

const presets: Record<string, Record<string, string>> = {
  everyMinute: { minute: '*', hour: '*', dayOfMonth: '*', month: '*', dayOfWeek: '*' },
  everyHour: { minute: '0', hour: '*', dayOfMonth: '*', month: '*', dayOfWeek: '*' },
  everyDay: { minute: '0', hour: '0', dayOfMonth: '*', month: '*', dayOfWeek: '*' },
  everyWeek: { minute: '0', hour: '0', dayOfMonth: '*', month: '*', dayOfWeek: '0' },
  everyMonth: { minute: '0', hour: '0', dayOfMonth: '1', month: '*', dayOfWeek: '*' },
  workdays: { minute: '0', hour: '9', dayOfMonth: '*', month: '*', dayOfWeek: '1-5' },
  midnight: { minute: '0', hour: '0', dayOfMonth: '*', month: '*', dayOfWeek: '*' },
  noon: { minute: '0', hour: '12', dayOfMonth: '*', month: '*', dayOfWeek: '*' },
};

const presetOptions = [
  { label: 'Custom', value: 'custom' },
  { label: 'Every minute', value: 'everyMinute' },
  { label: 'Every hour', value: 'everyHour' },
  { label: 'Every day', value: 'everyDay' },
  { label: 'Every week', value: 'everyWeek' },
  { label: 'Every month', value: 'everyMonth' },
  { label: 'Workdays at 9 AM', value: 'workdays' },
  { label: 'Every midnight', value: 'midnight' },
  { label: 'Every noon', value: 'noon' },
];

const applyPreset = (p: string) => {
  if (p !== 'custom' && presets[p]) {
    const preset = presets[p];
    minute.value = preset.minute;
    hour.value = preset.hour;
    dayOfMonth.value = preset.dayOfMonth;
    month.value = preset.month;
    dayOfWeek.value = preset.dayOfWeek;
  }
};

const cronExpression = computed(() => {
  return `${minute.value} ${hour.value} ${dayOfMonth.value} ${month.value} ${dayOfWeek.value}`;
});

const cronDescription = computed(() => {
  const parts: string[] = [];

  if (minute.value !== '*') {
    parts.push(`at minute ${minute.value}`);
  }

  if (hour.value !== '*') {
    parts.push(`at ${hour.value}:00`);
  }

  if (dayOfMonth.value !== '*' && dayOfMonth.value !== '1') {
    parts.push(`on day ${dayOfMonth.value} of month`);
  } else if (dayOfMonth.value === '1') {
    parts.push(`on the first day of month`);
  }

  if (month.value !== '*') {
    parts.push(`in month ${month.value}`);
  }

  if (dayOfWeek.value !== '*') {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    parts.push(`on ${days[parseInt(dayOfWeek.value)] || dayOfWeek.value}`);
  }

  return parts.length > 0 ? parts.join(' ') : 'Every minute';
});

const nodeExample = computed(() => {
  return `const cron = require('node-cron');

cron.schedule('${cronExpression.value}', () => {
  console.log('Task executed');
});`;
});

const pythonExample = computed(() => {
  return `from APScheduler.schedulers.background import BackgroundScheduler
import atexit

scheduler = BackgroundScheduler()
scheduler.add_job(func=my_job, trigger="cron", minute='${minute.value}', hour='${hour.value}')
scheduler.start()
atexit.register(lambda: scheduler.shutdown())`;
});
</script>

<template>
  <div class="space-y-4">
    <n-alert type="info" closable>
      Generate cron expressions and task scheduling code for various languages.
    </n-alert>

    <div class="space-y-2">
      <label class="block font-semibold">Use Preset</label>
      <n-select v-model:value="preset" :options="presetOptions" @update:value="applyPreset" />
    </div>

    <div v-if="preset === 'custom'" class="space-y-2">
      <label class="block font-semibold">Custom Cron Expression</label>
      <div class="grid grid-cols-5 gap-2">
        <div>
          <div class="text-xs text-gray-500 mb-1">Minute (0-59)</div>
          <n-input v-model:value="minute" placeholder="0-59, *" />
        </div>
        <div>
          <div class="text-xs text-gray-500 mb-1">Hour (0-23)</div>
          <n-input v-model:value="hour" placeholder="0-23, *" />
        </div>
        <div>
          <div class="text-xs text-gray-500 mb-1">Day (1-31)</div>
          <n-input v-model:value="dayOfMonth" placeholder="1-31, *" />
        </div>
        <div>
          <div class="text-xs text-gray-500 mb-1">Month (1-12)</div>
          <n-input v-model:value="month" placeholder="1-12, *" />
        </div>
        <div>
          <div class="text-xs text-gray-500 mb-1">Day of Week (0-6)</div>
          <n-input v-model:value="dayOfWeek" placeholder="0-6, *" />
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Cron Expression</label>
      <InputCopyable :value="cronExpression" />
    </div>

    <div class="p-4 bg-blue-50 border border-blue-300 rounded">
      <div class="font-semibold text-blue-900">Description</div>
      <div class="text-blue-800">{{ cronDescription }}</div>
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Node.js Example</label>
      <InputCopyable :value="nodeExample" />
    </div>

    <div class="space-y-2">
      <label class="block font-semibold">Python Example</label>
      <InputCopyable :value="pythonExample" />
    </div>
  </div>
</template>
