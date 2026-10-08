/**
 * Browser API Polyfill
 * This polyfill provides compatibility between Chrome's chrome.* API and Firefox's browser.* API
 * Source: https://github.com/mozilla/webextension-polyfill
 */

if (typeof browser === 'undefined' && typeof chrome !== 'undefined') {
  // Chrome environment - create browser namespace as alias to chrome
  window.browser = chrome;
}

if (typeof browser === 'undefined') {
  // Fallback for environments without either API
  console.warn('Browser extension API not available');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = browser;
}
