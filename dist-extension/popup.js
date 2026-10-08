// Popup JavaScript for Dev Tools extension
// Use browser API with polyfill for cross-browser compatibility

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Tool categories and their tools (subset of main devtools)
const toolsByCategory = [
  {
    name: 'AI generation',
    tools: [
      { name: 'Generate Image', icon: 'IMG', url: 'https://devtools.khulnasoft.com/generate-image' },
      { name: 'Generate Object', icon: '{}', url: 'https://devtools.khulnasoft.com/generate-object' },
      { name: 'Generate Speech', icon: 'S', url: 'https://devtools.khulnasoft.com/generate-speech' },
      { name: 'Generate Text', icon: 'T', url: 'https://devtools.khulnasoft.com/generate-text' },
      { name: 'Generate Video', icon: 'VID', url: 'https://devtools.khulnasoft.com/generate-video' },
    ],
  },
  {
    name: 'Crypto',
    tools: [
      { name: 'Token Generator', icon: '🔑', url: 'https://devtools.khulnasoft.com/token-generator' },
      { name: 'Hash Text', icon: '#️⃣', url: 'https://devtools.khulnasoft.com/hash-text' },
      { name: 'UUID Generator', icon: '🆔', url: 'https://devtools.khulnasoft.com/uuid-generator' },
      { name: 'Password Strength', icon: '🔒', url: 'https://devtools.khulnasoft.com/password-strength-analyser' },
    ],
  },
  {
    name: 'Converter',
    tools: [
      { name: 'Base64 String', icon: '📝', url: 'https://devtools.khulnasoft.com/base64-string-converter' },
      { name: 'Base64 File', icon: '📁', url: 'https://devtools.khulnasoft.com/base64-file-converter' },
      { name: 'Color Converter', icon: '🎨', url: 'https://devtools.khulnasoft.com/color-converter' },
      { name: 'Case Converter', icon: '🔠', url: 'https://devtools.khulnasoft.com/case-converter' },
      { name: 'JSON to YAML', icon: '📋', url: 'https://devtools.khulnasoft.com/json-to-yaml-converter' },
    ],
  },
  {
    name: 'Web',
    tools: [
      { name: 'URL Encoder', icon: '🔗', url: 'https://devtools.khulnasoft.com/url-encoder' },
      { name: 'HTML Entities', icon: '🏷️', url: 'https://devtools.khulnasoft.com/html-entities' },
      { name: 'JWT Parser', icon: '🎫', url: 'https://devtools.khulnasoft.com/jwt-parser' },
      { name: 'User Agent Parser', icon: '🖥️', url: 'https://devtools.khulnasoft.com/user-agent-parser' },
    ],
  },
  {
    name: 'Development',
    tools: [
      { name: 'JSON Viewer', icon: '👁️', url: 'https://devtools.khulnasoft.com/json-viewer' },
      { name: 'Regex Tester', icon: '🔍', url: 'https://devtools.khulnasoft.com/regex-tester' },
      { name: 'Crontab Generator', icon: '⏰', url: 'https://devtools.khulnasoft.com/crontab-generator' },
      { name: 'SQL Prettify', icon: '💾', url: 'https://devtools.khulnasoft.com/sql-prettify' },
    ],
  },
  {
    name: 'Network',
    tools: [
      { name: 'IPv4 Subnet Calculator', icon: '🌐', url: 'https://devtools.khulnasoft.com/ipv4-subnet-calculator' },
      { name: 'MAC Address Generator', icon: '💻', url: 'https://devtools.khulnasoft.com/mac-address-generator' },
    ],
  },
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const toolsList = document.getElementById('toolsList');
const inspectBtn = document.getElementById('inspectBtn');
const screenshotBtn = document.getElementById('screenshotBtn');
const openSiteBtn = document.getElementById('openSiteBtn');
const preferencesBtn = document.getElementById('preferencesBtn');

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  renderTools(toolsByCategory);
  setupEventListeners();
});

// Render tools list
function renderTools(categories) {
  toolsList.innerHTML = '';
  
  if (categories.length === 0) {
    toolsList.innerHTML = '<div class="no-results">No tools found</div>';
    return;
  }
  
  categories.forEach((category) => {
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.textContent = category.name;
    toolsList.appendChild(categoryHeader);
    
    category.tools.forEach((tool) => {
      const toolItem = createToolItem(tool);
      toolsList.appendChild(toolItem);
    });
  });
}

// Create a tool item element
function createToolItem(tool) {
  const item = document.createElement('div');
  item.className = 'tool-item';
  item.innerHTML = `
    <div class="tool-icon">${tool.icon}</div>
    <div class="tool-info">
      <div class="tool-name">${tool.name}</div>
      <div class="tool-category">${tool.category || 'Tool'}</div>
    </div>
  `;
  
  item.addEventListener('click', () => {
    openTool(tool.url);
  });
  
  return item;
}

// Open a tool in a new tab
function openTool(url) {
  browserAPI.tabs.create({ url });
  window.close();
}

// Search tools
function searchTools(query) {
  const lowerQuery = query.toLowerCase();
  
  if (!lowerQuery) {
    renderTools(toolsByCategory);
    return;
  }
  
  const filteredCategories = toolsByCategory
    .map((category) => ({
      ...category,
      tools: category.tools.filter((tool) =>
        tool.name.toLowerCase().includes(lowerQuery),
      ),
    }))
    .filter((category) => category.tools.length > 0);
  
  renderTools(filteredCategories);
}

// Setup event listeners
function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    searchTools(e.target.value);
  });
  
  inspectBtn.addEventListener('click', () => {
    browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        browserAPI.tabs.sendMessage(tabs[0].id, { action: 'inspectElement' });
        window.close();
      }
    });
  });
  
  screenshotBtn.addEventListener('click', () => {
    browserAPI.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      // Create a download link for the screenshot
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `screenshot-${Date.now()}.png`;
      link.click();
    });
  });
  
  openSiteBtn.addEventListener('click', () => {
    browserAPI.tabs.create({ url: 'https://devtools.khulnasoft.com' });
    window.close();
  });
  
  preferencesBtn.addEventListener('click', () => {
    browserAPI.runtime.openOptionsPage();
  });
}

// Get current tab info
browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0]) {
    console.log('Current tab:', tabs[0].url);
  }
});
