// Dev Tools Toolbar JavaScript
// Floating toolbar similar to Vercel Toolbar

const toolbar = document.getElementById('toolbar');
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuSearch = document.getElementById('menuSearch');
const statusIndicator = document.getElementById('statusIndicator');
const dragHandle = document.getElementById('dragHandle');

let isSleeping = true;
let isMenuOpen = false;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

// Default shortcuts
const defaultShortcuts = {
  menu: 'Control',
  search: '/',
  inspect: '',
  screenshot: '',
  hide: 'Escape',
  json: '',
  base64: '',
};

// Current shortcuts
let shortcuts = { ...defaultShortcuts };

// Initialize toolbar
function initToolbar() {
  loadPosition();
  loadState();
  loadShortcuts();
  setupEventListeners();
  setupKeyboardShortcuts();
}

// Load shortcuts from storage
function loadShortcuts() {
  if (typeof browser !== 'undefined') {
    browser.storage.local.get(['shortcuts'], (result) => {
      shortcuts = { ...defaultShortcuts, ...(result.shortcuts || {}) };
      updateMenuShortcuts();
    });
  } else if (typeof chrome !== 'undefined') {
    chrome.storage.local.get(['shortcuts'], (result) => {
      shortcuts = { ...defaultShortcuts, ...(result.shortcuts || {}) };
      updateMenuShortcuts();
    });
  }
}

// Update menu shortcuts display
function updateMenuShortcuts() {
  const shortcutMap = {
    search: 'search',
    inspect: 'inspect',
    screenshot: 'screenshot',
    hide: 'hide',
  };
  
  Object.keys(shortcutMap).forEach(action => {
    const shortcut = shortcuts[action];
    const items = menuPanel.querySelectorAll(`[data-action="${action}"]`);
    items.forEach(item => {
      let shortcutEl = item.querySelector('.menu-item-shortcut');
      if (!shortcutEl) {
        shortcutEl = document.createElement('span');
        shortcutEl.className = 'menu-item-shortcut';
        item.appendChild(shortcutEl);
      }
      shortcutEl.textContent = shortcut || '';
      shortcutEl.style.display = shortcut ? 'block' : 'none';
    });
  });
}

// Load saved position
function loadPosition() {
  const position = localStorage.getItem('it-toolbar-position');
  if (position) {
    const { x, y } = JSON.parse(position);
    toolbar.style.right = 'auto';
    toolbar.style.left = `${x}px`;
    toolbar.style.top = `${y}px`;
    toolbar.style.transform = 'none';
  }
}

// Save position
function savePosition() {
  const rect = toolbar.getBoundingClientRect();
  localStorage.setItem('it-toolbar-position', JSON.stringify({
    x: rect.left,
    y: rect.top,
  }));
}

// Load state (sleeping/active)
function loadState() {
  const state = localStorage.getItem('it-toolbar-state');
  if (state === 'active') {
    wakeUp();
  } else {
    sleep();
  }
}

// Setup event listeners
function setupEventListeners() {
  // Menu toggle
  menuBtn.addEventListener('click', toggleMenu);
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toolbar.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Menu item clicks
  menuPanel.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const action = item.dataset.action;
      if (action) {
        e.preventDefault();
        handleMenuAction(action);
      }
    });
  });
  
  // Search
  menuSearch.addEventListener('input', (e) => {
    filterMenuItems(e.target.value);
  });
  
  // Dragging
  dragHandle.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
  
  // Toolbar buttons
  document.getElementById('searchBtn').addEventListener('click', () => {
    menuSearch.focus();
    openMenu();
  });
  
  document.getElementById('inspectBtn').addEventListener('click', () => {
    sendMessage('inspectElement');
  });
  
  document.getElementById('screenshotBtn').addEventListener('click', () => {
    sendMessage('takeScreenshot');
  });
  
  document.getElementById('hideBtn').addEventListener('click', () => {
    hideToolbar();
  });
  
  // Click on toolbar to wake up
  toolbar.addEventListener('click', () => {
    if (isSleeping) {
      wakeUp();
    }
  });
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const shortcut = buildShortcutString(e);
    
    // Check each shortcut
    if (shortcut === shortcuts.menu) {
      e.preventDefault();
      toggleMenu();
    }
    
    if (shortcut === shortcuts.search) {
      e.preventDefault();
      menuSearch.focus();
      openMenu();
    }
    
    if (shortcut === shortcuts.inspect) {
      e.preventDefault();
      sendMessage('inspectElement');
    }
    
    if (shortcut === shortcuts.screenshot) {
      e.preventDefault();
      sendMessage('takeScreenshot');
    }
    
    if (shortcut === shortcuts.hide) {
      e.preventDefault();
      if (isMenuOpen) {
        closeMenu();
      } else {
        hideToolbar();
      }
    }
    
    if (shortcut === shortcuts.json) {
      e.preventDefault();
      window.open('https://devtools.khulnasoft.com/json-viewer', '_blank');
    }
    
    if (shortcut === shortcuts.base64) {
      e.preventDefault();
      window.open('https://devtools.khulnasoft.com/base64-string-converter', '_blank');
    }
  });
}

// Build shortcut string from keyboard event
function buildShortcutString(e) {
  const parts = [];
  
  if (e.ctrlKey) parts.push('Ctrl');
  if (e.altKey) parts.push('Alt');
  if (e.shiftKey) parts.push('Shift');
  if (e.metaKey) parts.push('Cmd');
  
  const key = e.key;
  if (!parts.includes(key) && key !== 'Control' && key !== 'Alt' && key !== 'Shift' && key !== 'Meta') {
    parts.push(key);
  }
  
  return parts.join('+');
}

// Toggle menu
function toggleMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Open menu
function openMenu() {
  isMenuOpen = true;
  menuPanel.classList.add('open');
  menuBtn.classList.add('active');
  if (isSleeping) {
    wakeUp();
  }
}

// Close menu
function closeMenu() {
  isMenuOpen = false;
  menuPanel.classList.remove('open');
  menuBtn.classList.remove('active');
  menuSearch.value = '';
  filterMenuItems('');
}

// Filter menu items
function filterMenuItems(query) {
  const items = menuPanel.querySelectorAll('.menu-item');
  const lowerQuery = query.toLowerCase();
  
  items.forEach(item => {
    const text = item.querySelector('.menu-item-text').textContent.toLowerCase();
    if (text.includes(lowerQuery)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// Handle menu action
function handleMenuAction(action) {
  closeMenu();
  
  switch (action) {
    case 'search':
      menuSearch.focus();
      openMenu();
      break;
    case 'inspect':
      sendMessage('inspectElement');
      break;
    case 'screenshot':
      sendMessage('takeScreenshot');
      break;
    case 'preferences':
      sendMessage('openPreferences');
      break;
    case 'hide':
      hideToolbar();
      break;
  }
}

// Wake up toolbar
function wakeUp() {
  isSleeping = false;
  toolbar.classList.remove('sleeping');
  statusIndicator.classList.remove('sleeping');
  localStorage.setItem('it-toolbar-state', 'active');
}

// Sleep toolbar
function sleep() {
  isSleeping = true;
  toolbar.classList.add('sleeping');
  statusIndicator.classList.add('sleeping');
  localStorage.setItem('it-toolbar-state', 'sleeping');
}

// Hide toolbar
function hideToolbar() {
  toolbar.style.display = 'none';
  // Create a small indicator to show toolbar again
  showRestoreIndicator();
}

// Show restore indicator
function showRestoreIndicator() {
  const indicator = document.createElement('button');
  indicator.id = 'it-toolbar-restore';
  indicator.innerHTML = '🛠️';
  indicator.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #18a058;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 999999;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.2s;
  `;
  
  indicator.addEventListener('mouseenter', () => {
    indicator.style.transform = 'scale(1.1)';
  });
  
  indicator.addEventListener('mouseleave', () => {
    indicator.style.transform = 'scale(1)';
  });
  
  indicator.addEventListener('click', () => {
    toolbar.style.display = 'flex';
    indicator.remove();
    wakeUp();
  });
  
  document.body.appendChild(indicator);
}

// Dragging
function startDrag(e) {
  isDragging = true;
  const rect = toolbar.getBoundingClientRect();
  dragOffset.x = e.clientX - rect.left;
  dragOffset.y = e.clientY - rect.top;
  toolbar.style.transition = 'none';
}

function onDrag(e) {
  if (!isDragging) return;
  
  const x = e.clientX - dragOffset.x;
  const y = e.clientY - dragOffset.y;
  
  // Constrain to viewport
  const maxX = window.innerWidth - toolbar.offsetWidth;
  const maxY = window.innerHeight - toolbar.offsetHeight;
  
  toolbar.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
  toolbar.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
  toolbar.style.right = 'auto';
  toolbar.style.transform = 'none';
}

function stopDrag() {
  if (isDragging) {
    isDragging = false;
    toolbar.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    savePosition();
  }
}

// Send message to extension
function sendMessage(action) {
  if (typeof browser !== 'undefined') {
    browser.runtime.sendMessage({ action });
  } else if (typeof chrome !== 'undefined') {
    chrome.runtime.sendMessage({ action });
  }
}

// Listen for messages from extension
if (typeof browser !== 'undefined') {
  browser.runtime.onMessage.addListener(handleMessage);
} else if (typeof chrome !== 'undefined') {
  chrome.runtime.onMessage.addListener(handleMessage);
}

function handleMessage(request, sender, sendResponse) {
  if (request.action === 'showToolbar') {
    toolbar.style.display = 'flex';
    const indicator = document.getElementById('it-toolbar-restore');
    if (indicator) indicator.remove();
    wakeUp();
  }
  
  if (request.action === 'hideToolbar') {
    hideToolbar();
  }
  
  if (request.action === 'wakeUp') {
    wakeUp();
  }
  
  if (request.action === 'sleep') {
    sleep();
  }
  
  if (request.action === 'updateShortcuts') {
    shortcuts = { ...defaultShortcuts, ...(request.shortcuts || {}) };
    updateMenuShortcuts();
  }
  
  sendResponse({ success: true });
  return true;
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToolbar);
} else {
  initToolbar();
}
