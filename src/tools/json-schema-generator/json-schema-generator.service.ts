export function generateSchema(value: any): any {
  if (value === null) {
    return { type: 'null' };
  }

  if (typeof value === 'string') {
    return { type: 'string' };
  }

  if (typeof value === 'number') {
    return Number.isInteger(value) ? { type: 'integer' } : { type: 'number' };
  }

  if (typeof value === 'boolean') {
    return { type: 'boolean' };
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return { type: 'array', items: {} };
    }
    return {
      type: 'array',
      items: generateSchema(value[0]),
    };
  }

  if (typeof value === 'object') {
    const properties: Record<string, any> = {};
    const required: string[] = [];

    for (const key of Object.keys(value)) {
      properties[key] = generateSchema(value[key]);
      required.push(key);
    }

    return {
      type: 'object',
      properties,
      required,
    };
  }

  return {};
}
