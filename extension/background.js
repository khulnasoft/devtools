// Background service worker for Dev Tools extension
// Use browser API with polyfill for cross-browser compatibility

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Handle extension installation
browserAPI.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Dev Tools extension installed');
    // Open welcome page or show notification
  }
});

// Handle messages from content scripts and popup
browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageInfo') {
    // Send page information back
    sendResponse({
      url: sender.tab?.url,
      title: sender.tab?.title,
    });
  }
  
  if (request.action === 'injectTool') {
    // Inject a tool into the current page
    if (sender.tab?.id) {
      browserAPI.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['inject-tool.js'],
      });
    }
    sendResponse({ success: true });
  }
  
  if (request.action === 'takeScreenshot') {
    // Take screenshot of visible area
    browserAPI.tabs.captureVisibleTab(null, { format: 'png' }, (dataUrl) => {
      sendResponse({ screenshot: dataUrl });
    });
    return true; // Keep message channel open for async response
  }
  
  return true;
});

// Handle keyboard shortcuts
browserAPI.commands.onCommand.addListener((command) => {
  if (command === '_execute_action') {
    // Firefox doesn't support openPopup, so we open a tab instead
    if (browserAPI.action.openPopup) {
      browserAPI.action.openPopup();
    } else {
      browserAPI.tabs.create({ url: 'popup.html' });
    }
  }
});

// Store user preferences
browserAPI.storage.local.get(['preferences'], (result) => {
  if (!result.preferences) {
    browserAPI.storage.local.set({
      preferences: {
        theme: 'system',
        alwaysActivate: false,
        startHidden: false,
      },
    });
  }
});
