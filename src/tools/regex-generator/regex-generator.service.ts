export function generateRegex(description: string): string {
  const desc = description.trim().toLowerCase();
  if (!desc) {
    return '';
  }

  if (desc.includes('email')) {
    return '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
  }
  if (desc.includes('url') || desc.includes('link')) {
    return 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';
  }
  if (desc.includes('phone')) {
    return '\\+?[1-9]\\d{1,14}';
  }
  if (desc.includes('date')) {
    return '\\d{4}-\\d{2}-\\d{2}';
  }
  if (desc.includes('time')) {
    return '\\d{2}:\\d{2}(?::\\d{2})?';
  }
  if (desc.includes('hex') || desc.includes('hexadecimal')) {
    return '0x[0-9a-fA-F]+';
  }
  if (desc.includes('ip')) {
    return '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b';
  }
  if (desc.includes('number') || desc.includes('digit')) {
    return '\\d+';
  }
  if (desc.includes('letter') || desc.includes('alphabet')) {
    return '[a-zA-Z]+';
  }
  if (desc.includes('word')) {
    return '\\b\\w+\\b';
  }
  if (desc.includes('whitespace') || desc.includes('space')) {
    return '\\s+';
  }

  return '// Could not generate regex from description. Try keywords like: email, url, phone, date, ip, hex, number, word';
}

export function getExplanation(description: string): string {
  const desc = description.trim().toLowerCase();
  if (!desc) {
    return '';
  }

  const explanations: Record<string, string> = {
    email: 'Matches standard email addresses with local part and domain',
    url: 'Matches HTTP/HTTPS URLs with optional www subdomain',
    phone: 'Matches international phone numbers (E.164 format)',
    date: 'Matches dates in YYYY-MM-DD format',
    time: 'Matches time in HH:MM or HH:MM:SS format',
    hex: 'Matches hexadecimal numbers starting with 0x',
    ip: 'Matches IPv4 addresses (basic pattern)',
    number: 'Matches one or more digits',
    letter: 'Matches one or more letters (a-z, A-Z)',
    word: 'Matches word characters (letters, digits, underscore)',
    whitespace: 'Matches one or more whitespace characters',
  };

  for (const [key, value] of Object.entries(explanations)) {
    if (desc.includes(key)) {
      return value;
    }
  }

  return 'No explanation available for this pattern';
}
