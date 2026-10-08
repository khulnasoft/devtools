export function generateQuery(description: string, tableName: string): string {
  const desc = description.trim().toLowerCase();
  const table = tableName.trim() || 'users';

  if (!desc) {
    return '';
  }

  if (desc.includes('select all') || desc.includes('get all') || desc.includes('show all')) {
    return `SELECT * FROM ${table};`;
  }
  if (desc.includes('select') && desc.includes('where')) {
    return `SELECT * FROM ${table}\nWHERE condition = 'value';`;
  }
  if (desc.includes('count') || desc.includes('how many')) {
    return `SELECT COUNT(*) FROM ${table};`;
  }
  if (desc.includes('insert') || desc.includes('add') || desc.includes('create')) {
    return `INSERT INTO ${table} (column1, column2, column3)\nVALUES (value1, value2, value3);`;
  }
  if (desc.includes('update') || desc.includes('modify') || desc.includes('change')) {
    return `UPDATE ${table}\nSET column1 = 'new_value'\nWHERE condition = 'value';`;
  }
  if (desc.includes('delete') || desc.includes('remove')) {
    return `DELETE FROM ${table}\nWHERE condition = 'value';`;
  }
  if (desc.includes('join') || desc.includes('combine')) {
    return `SELECT t1.column1, t2.column2\nFROM ${table} t1\nJOIN other_table t2 ON t1.id = t2.id;`;
  }
  if (desc.includes('order') || desc.includes('sort')) {
    return `SELECT * FROM ${table}\nORDER BY column_name ASC;`;
  }
  if (desc.includes('group') || desc.includes('aggregate')) {
    return `SELECT column_name, COUNT(*)\nFROM ${table}\nGROUP BY column_name;`;
  }
  if (desc.includes('limit') || desc.includes('top')) {
    return `SELECT * FROM ${table}\nLIMIT 10;`;
  }

  return '-- Could not generate SQL from description\n-- Try keywords like: select all, insert, update, delete, count, join, order by, group by, limit';
}

export function getQueryType(description: string): string {
  const desc = description.trim().toLowerCase();

  if (desc.includes('select')) {
    return 'SELECT';
  }
  if (desc.includes('insert') || desc.includes('add')) {
    return 'INSERT';
  }
  if (desc.includes('update') || desc.includes('modify')) {
    return 'UPDATE';
  }
  if (desc.includes('delete') || desc.includes('remove')) {
    return 'DELETE';
  }
  if (desc.includes('count')) {
    return 'COUNT';
  }
  if (desc.includes('join')) {
    return 'JOIN';
  }

  return 'UNKNOWN';
}
