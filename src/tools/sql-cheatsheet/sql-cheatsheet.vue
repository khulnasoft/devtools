<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NCard, NAccordion, NAccordionItem } from 'naive-ui';
import InputCopyable from '../../components/InputCopyable.vue';

const searchQuery = ref('');

const sections = [
  {
    title: 'SELECT Queries',
    items: [
      { query: 'SELECT', example: `SELECT * FROM users;` },
      { query: 'SELECT specific columns', example: `SELECT id, name, email FROM users;` },
      { query: 'WHERE clause', example: `SELECT * FROM users WHERE age > 18;` },
      { query: 'ORDER BY', example: `SELECT * FROM users ORDER BY name ASC;` },
      { query: 'LIMIT', example: `SELECT * FROM users LIMIT 10;` },
      { query: 'DISTINCT', example: `SELECT DISTINCT city FROM users;` },
      { query: 'GROUP BY', example: `SELECT city, COUNT(*) FROM users GROUP BY city;` },
      { query: 'HAVING', example: `SELECT city, COUNT(*) cnt FROM users GROUP BY city HAVING cnt > 5;` },
    ],
  },
  {
    title: 'JOINs',
    items: [
      { query: 'INNER JOIN', example: `SELECT u.*, p.* FROM users u INNER JOIN posts p ON u.id = p.user_id;` },
      { query: 'LEFT JOIN', example: `SELECT u.*, p.* FROM users u LEFT JOIN posts p ON u.id = p.user_id;` },
      { query: 'RIGHT JOIN', example: `SELECT u.*, p.* FROM users u RIGHT JOIN posts p ON u.id = p.user_id;` },
      { query: 'FULL OUTER JOIN', example: `SELECT u.*, p.* FROM users u FULL OUTER JOIN posts p ON u.id = p.user_id;` },
      { query: 'CROSS JOIN', example: `SELECT * FROM users CROSS JOIN roles;` },
    ],
  },
  {
    title: 'Aggregate Functions',
    items: [
      { query: 'COUNT', example: `SELECT COUNT(*) FROM users;` },
      { query: 'SUM', example: `SELECT SUM(amount) FROM orders;` },
      { query: 'AVG', example: `SELECT AVG(price) FROM products;` },
      { query: 'MAX', example: `SELECT MAX(salary) FROM employees;` },
      { query: 'MIN', example: `SELECT MIN(price) FROM products;` },
    ],
  },
  {
    title: 'INSERT, UPDATE, DELETE',
    items: [
      { query: 'INSERT', example: `INSERT INTO users (name, email) VALUES ('John', 'john@example.com');` },
      { query: 'UPDATE', example: `UPDATE users SET email = 'new@example.com' WHERE id = 1;` },
      { query: 'DELETE', example: `DELETE FROM users WHERE id = 1;` },
      { query: 'INSERT multiple', example: `INSERT INTO users (name, email) VALUES ('Jane', 'jane@example.com'), ('Bob', 'bob@example.com');` },
    ],
  },
];

const filteredSections = computed(() => {
  if (!searchQuery.value) return sections;
  const query = searchQuery.value.toLowerCase();
  return sections
    .map(section => ({
      ...section,
      items: section.items.filter(
        item => item.query.toLowerCase().includes(query) || item.example.toLowerCase().includes(query)
      ),
    }))
    .filter(section => section.items.length > 0);
});
</script>

<template>
  <div class="space-y-4">
    <c-card>
      <n-input 
        v-model:value="searchQuery"
        type="text"
        placeholder="Search SQL queries..."
        clearable
      />
    </c-card>

    <n-accordion default-expanded-names="0">
      <n-accordion-item v-for="(section, idx) in filteredSections" :key="idx" :title="section.title" :name="idx">
        <div class="space-y-3">
          <n-card v-for="(item, itemIdx) in section.items" :key="itemIdx" size="small">
            <template #header>
              <code class="text-sm font-mono">{{ item.query }}</code>
            </template>
            <InputCopyable :value="item.example" multiline />
          </n-card>
        </div>
      </n-accordion-item>
    </n-accordion>
  </div>
</template>

<style scoped>
code {
  background-color: var(--n-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
