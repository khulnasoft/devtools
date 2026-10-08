// Options page JavaScript for Dev Tools extension
// Use browser API with polyfill for cross-browser compatibility

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// DOM elements
const alwaysActivate = document.getElementById('alwaysActivate');
const startHidden = document.getElementById('startHidden');
const theme = document.getElementById('theme');
const saveBtn = document.getElementById('saveBtn');
const savedMessage = document.getElementById('savedMessage');

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

// Current shortcuts being recorded
let currentRecordingAction = null;

// Load saved preferences
browserAPI.storage.local.get(['preferences', 'shortcuts'], (result) => {
  const preferences = result.preferences || {
    theme: 'system',
    alwaysActivate: false,
    startHidden: false,
  };
  
  const shortcuts = result.shortcuts || defaultShortcuts;
  
  alwaysActivate.checked = preferences.alwaysActivate;
  startHidden.checked = preferences.startHidden;
  theme.value = preferences.theme;
  
  // Load shortcuts
  Object.keys(shortcuts).forEach(action => {
    const element = document.getElementById(`shortcut-${action}`);
    if (element) {
      element.textContent = shortcuts[action] || 'Not set';
    }
  });
});

// Record shortcut
window.recordShortcut = function(action) {
  if (currentRecordingAction) {
    cancelRecording();
  }
  
  currentRecordingAction = action;
  const element = document.getElementById(`shortcut-${action}`);
  element.textContent = 'Press keys...';
  element.classList.add('recording');
  
  document.addEventListener('keydown', handleShortcutRecording);
};

// Cancel recording
function cancelRecording() {
  if (currentRecordingAction) {
    const element = document.getElementById(`shortcut-${currentRecordingAction}`);
    element.classList.remove('recording');
    
    // Restore previous value
    browserAPI.storage.local.get(['shortcuts'], (result) => {
      const shortcuts = result.shortcuts || defaultShortcuts;
      element.textContent = shortcuts[currentRecordingAction] || 'Not set';
    });
    
    currentRecordingAction = null;
    document.removeEventListener('keydown', handleShortcutRecording);
  }
}

// Handle shortcut recording
function handleShortcutRecording(e) {
  e.preventDefault();
  
  if (!currentRecordingAction) return;
  
  // Allow Escape to cancel
  if (e.key === 'Escape') {
    cancelRecording();
    return;
  }
  
  // Build shortcut string
  const parts = [];
  
  if (e.ctrlKey) parts.push('Ctrl');
  if (e.altKey) parts.push('Alt');
  if (e.shiftKey) parts.push('Shift');
  if (e.metaKey) parts.push('Cmd');
  
  // Add the key
  const key = e.key;
  if (!parts.includes(key) && key !== 'Control' && key !== 'Alt' && key !== 'Shift' && key !== 'Meta') {
    parts.push(key);
  }
  
  const shortcut = parts.join('+');
  
  if (shortcut) {
    const element = document.getElementById(`shortcut-${currentRecordingAction}`);
    element.textContent = shortcut;
    element.classList.remove('recording');
    
    currentRecordingAction = null;
    document.removeEventListener('keydown', handleShortcutRecording);
  }
}

// Clear shortcut
window.clearShortcut = function(action) {
  const element = document.getElementById(`shortcut-${action}`);
  element.textContent = 'Not set';
};

// Save preferences
saveBtn.addEventListener('click', () => {
  const preferences = {
    theme: theme.value,
    alwaysActivate: alwaysActivate.checked,
    startHidden: startHidden.checked,
  };
  
  // Collect shortcuts
  const shortcuts = {};
  Object.keys(defaultShortcuts).forEach(action => {
    const element = document.getElementById(`shortcut-${action}`);
    const value = element.textContent;
    shortcuts[action] = value === 'Not set' ? '' : value;
  });
  
  browserAPI.storage.local.set({ preferences, shortcuts }, () => {
    // Show saved message
    savedMessage.classList.add('show');
    
    // Hide message after 2 seconds
    setTimeout(() => {
      savedMessage.classList.remove('show');
    }, 2000);
    
    // Notify content scripts to update
    browserAPI.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.id) {
          browserAPI.tabs.sendMessage(tab.id, {
            action: 'updatePreferences',
            preferences,
            shortcuts,
          }).catch(() => {
            // Tab might not have content script loaded, ignore error
          });
        }
      });
    });
  });
});
