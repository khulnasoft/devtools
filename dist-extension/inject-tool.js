// Injected script for running tools in the context of the current page
// This runs when a tool is injected into a page

console.log('Dev Tools injector loaded');

// Create a floating panel for the tool
function createToolPanel(toolName, toolUrl) {
  // Remove existing panel if any
  const existingPanel = document.getElementById('it-tools-panel');
  if (existingPanel) {
    existingPanel.remove();
  }
  
  // Create panel container
  const panel = document.createElement('div');
  panel.id = 'it-tools-panel';
  panel.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 400px;
    max-height: 80vh;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    z-index: 999999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;
  
  // Create header
  const header = document.createElement('div');
  header.style.cssText = `
    padding: 16px;
    background: linear-gradient(135deg, #18a058 0%, #16b875 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  
  const title = document.createElement('span');
  title.textContent = toolName;
  title.style.fontWeight = '600';
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  closeBtn.addEventListener('click', () => {
    panel.remove();
  });
  
  header.appendChild(title);
  header.appendChild(closeBtn);
  
  // Create iframe for the tool
  const iframe = document.createElement('iframe');
  iframe.src = toolUrl;
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    flex: 1;
  `;
  
  // Create resize handle
  const resizeHandle = document.createElement('div');
  resizeHandle.style.cssText = `
    height: 8px;
    background: #f1f5f9;
    cursor: ns-resize;
  `;
  
  // Assemble panel
  panel.appendChild(header);
  panel.appendChild(iframe);
  panel.appendChild(resizeHandle);
  
  document.body.appendChild(panel);
  
  // Make panel draggable
  makeDraggable(panel, header);
  
  // Make panel resizable
  makeResizable(panel, resizeHandle);
}

// Make element draggable
function makeDraggable(element, handle) {
  let isDragging = false;
  let startX, startY, initialX, initialY;
  
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = element.offsetLeft;
    initialY = element.offsetTop;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  
  function onMouseMove(e) {
    if (!isDragging) return;
    
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    element.style.left = `${initialX + dx}px`;
    element.style.top = `${initialY + dy}px`;
    element.style.right = 'auto';
  }
  
  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// Make element resizable
function makeResizable(element, handle) {
  let isResizing = false;
  let startY, startHeight;
  
  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = element.offsetHeight;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  
  function onMouseMove(e) {
    if (!isResizing) return;
    
    const dy = e.clientY - startY;
    const newHeight = Math.max(200, startHeight + dy);
    
    element.style.height = `${newHeight}px`;
  }
  
  function onMouseUp() {
    isResizing = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// Listen for injection requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'showTool') {
    createToolPanel(request.toolName, request.toolUrl);
    sendResponse({ success: true });
  }
  
  return true;
});
