// Content script for Dev Tools extension
// Runs on every page to enable page inspection and tool injection
// Use browser API with polyfill for cross-browser compatibility

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

console.log('Dev Tools content script loaded');

// Listen for messages from background script
browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageInfo') {
    sendResponse({
      url: window.location.href,
      title: document.title,
      meta: getMetaTags(),
    });
  }
  
  if (request.action === 'inspectElement') {
    // Enable element inspection mode
    enableInspectionMode();
    sendResponse({ success: true });
  }
  
  if (request.action === 'highlightElement') {
    // Highlight a specific element
    if (request.selector) {
      const element = document.querySelector(request.selector);
      if (element) {
        element.style.outline = '3px solid #18a058';
        element.style.outlineOffset = '2px';
        setTimeout(() => {
          element.style.outline = '';
          element.style.outlineOffset = '';
        }, 2000);
      }
    }
    sendResponse({ success: true });
  }
  
  if (request.action === 'updatePreferences') {
    // Update preferences and re-inject button if needed
    if (request.preferences && !request.preferences.startHidden) {
      const existingButton = document.getElementById('it-tools-toggle');
      if (!existingButton) {
        injectToolbarButton();
      }
    } else {
      const existingButton = document.getElementById('it-tools-toggle');
      if (existingButton) {
        existingButton.remove();
      }
    }
    sendResponse({ success: true });
  }
  
  if (request.action === 'updateShortcuts') {
    // Forward shortcuts to toolbar iframe
    const iframe = document.getElementById('it-toolbar-iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({
        action: 'updateShortcuts',
        shortcuts: request.shortcuts,
      }, '*');
    }
    sendResponse({ success: true });
  }
  
  return true;
});

// Get meta tags from the page
function getMetaTags() {
  const metaTags = {};
  const metaElements = document.querySelectorAll('meta');
  
  metaElements.forEach((meta) => {
    const name = meta.getAttribute('name') || meta.getAttribute('property');
    const content = meta.getAttribute('content');
    if (name && content) {
      metaTags[name] = content;
    }
  });
  
  return metaTags;
}

// Enable inspection mode for selecting elements
function enableInspectionMode() {
  const overlay = document.createElement('div');
  overlay.id = 'it-tools-inspector-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    cursor: crosshair;
    background: rgba(24, 160, 88, 0.1);
  `;
  
  document.body.appendChild(overlay);
  
  overlay.addEventListener('mouseover', (e) => {
    e.target.style.outline = '2px solid #18a058';
    e.target.style.outlineOffset = '2px';
  });
  
  overlay.addEventListener('mouseout', (e) => {
    e.target.style.outline = '';
    e.target.style.outlineOffset = '';
  });
  
  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = e.target;
    const selector = getSelector(element);
    
    browserAPI.runtime.sendMessage({
      action: 'elementSelected',
      selector,
      tagName: element.tagName,
      id: element.id,
      classes: element.className,
    });
    
    overlay.remove();
  });
  
  // Press Escape to exit inspection mode
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  
  document.addEventListener('keydown', escapeHandler);
}

// Generate CSS selector for an element
function getSelector(element) {
  if (element.id) {
    return `#${element.id}`;
  }
  
  if (element.className) {
    const classes = element.className.split(' ').filter(c => c).join('.');
    return `${element.tagName.toLowerCase()}.${classes}`;
  }
  
  return element.tagName.toLowerCase();
}

// Inject toolbar
function injectToolbar() {
  // Check if toolbar already exists
  if (document.getElementById('it-toolbar-iframe')) {
    return;
  }
  
  // Create iframe for toolbar
  const iframe = document.createElement('iframe');
  iframe.id = 'it-toolbar-iframe';
  iframe.src = browserAPI.runtime.getURL('toolbar.html');
  iframe.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    z-index: 999999;
    pointer-events: auto;
  `;
  
  document.body.appendChild(iframe);
  
  // The iframe is transparent outside the toolbar; its document disables pointer events there.
  iframe.onload = () => {
    iframe.contentDocument.documentElement.style.pointerEvents = 'none';
    const toolbar = iframe.contentDocument.getElementById('toolbar');
    if (toolbar) toolbar.style.pointerEvents = 'auto';
  };
}

// Inject toolbar toggle button (fallback)
function injectToolbarButton() {
  const button = document.createElement('button');
  button.id = 'it-tools-toggle';
  button.innerHTML = '🛠️';
  button.style.cssText = `
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
    z-index: 999998;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.2s;
  `;
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', () => {
    injectToolbar();
    button.remove();
  });
  
  document.body.appendChild(button);
}

// Check if toolbar should be injected
browserAPI.storage.local.get(['preferences'], (result) => {
  const preferences = result.preferences || {};
  
  if (preferences.alwaysActivate || !preferences.startHidden) {
    injectToolbar();
  } else {
    injectToolbarButton();
  }
});
