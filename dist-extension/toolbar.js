const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
const toolbar = document.getElementById('toolbar');
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuSearch = document.getElementById('menuSearch');
const toolSections = document.getElementById('toolSections');
const statusIndicator = document.getElementById('statusIndicator');
const dragHandle = document.getElementById('dragHandle');
const tools = [
  { category: 'Quick actions', items: [
    { id: 'search', label: 'Search all tools', description: 'Find a utility by name', icon: '⌕', shortcut: '/' },
    { id: 'inspect', label: 'Inspect element', description: 'Pick an element on this page', icon: '↗' },
    { id: 'screenshot', label: 'Capture screenshot', description: 'Save the current page view', icon: '▣' },
  ]},
  { category: 'Popular tools', items: [
    { label: 'JSON Viewer', description: 'Format and explore JSON', icon: '{}' , path: 'json-viewer' },
    { label: 'Base64 Converter', description: 'Encode and decode Base64', icon: '64', path: 'base64-string-converter' },
    { label: 'Regex Tester', description: 'Build and test regular expressions', icon: '.*', path: 'regex-tester' },
    { label: 'Color Converter', description: 'Convert colors between formats', icon: '◉', path: 'color-converter' },
    { label: 'JWT Decoder', description: 'Inspect JSON Web Tokens', icon: 'jwt', path: 'jwt-decoder' },
  ]},
  { category: 'All tools', items: [
    { label: 'Open DevTools', description: 'Browse the complete tool library', icon: '↗', path: '' },
  ]},
  { category: 'Settings', items: [
    { id: 'preferences', label: 'Preferences', description: 'Configure toolbar behavior', icon: '⚙' },
    { id: 'hide', label: 'Hide toolbar', description: 'Show it again from the extension menu', icon: '−', shortcut: 'Esc' },
  ]},
];
let isSleeping = false;
let isMenuOpen = false;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

function renderTools(query = '') {
  const normalized = query.trim().toLowerCase();
  const html = tools.map((section) => {
    const items = section.items.filter((item) => !normalized || `${item.label} ${item.description}`.toLowerCase().includes(normalized));
    if (!items.length) return '';
    return `<div class="menu-section"><div class="menu-section-title">${section.category}</div>${items.map((item) => `<button class="menu-item" type="button" data-id="${item.id || ''}" data-path="${item.path || ''}"><span class="menu-item-icon">${item.icon}</span><span class="menu-item-text">${item.label}<span class="menu-item-description">${item.description}</span></span>${item.shortcut ? `<span class="menu-item-shortcut">${item.shortcut}</span>` : ''}</button>`).join('')}</div>`;
  }).join('<div class="menu-divider"></div>');
  toolSections.innerHTML = html || '<div class="empty">No tools match your search.</div>';
}

function sendMessage(action) { browserAPI.runtime.sendMessage({ action }).catch(() => {}); }
function openMenu(focus = false) { isMenuOpen = true; menuPanel.classList.add('open'); menuBtn.classList.add('active'); menuBtn.setAttribute('aria-expanded', 'true'); if (focus) menuSearch.focus(); }
function closeMenu() { isMenuOpen = false; menuPanel.classList.remove('open'); menuBtn.classList.remove('active'); menuBtn.setAttribute('aria-expanded', 'false'); menuSearch.value = ''; renderTools(); }
function hideToolbar() { toolbar.style.display = 'none'; browserAPI.storage.local.set({ toolbarHidden: true }); }
function wakeUp() { isSleeping = false; toolbar.classList.remove('sleeping'); statusIndicator.classList.remove('sleeping'); }
function sleep() { isSleeping = true; toolbar.classList.add('sleeping'); statusIndicator.classList.add('sleeping'); }
function openTool(path) { window.open(`https://devtools.khulnasoft.com/${path}`, '_blank', 'noopener'); }

renderTools();
menuBtn.addEventListener('click', () => (isMenuOpen ? closeMenu() : openMenu()));
document.getElementById('searchBtn').addEventListener('click', () => openMenu(true));
document.getElementById('inspectBtn').addEventListener('click', () => sendMessage('inspectElement'));
document.getElementById('screenshotBtn').addEventListener('click', () => sendMessage('takeScreenshot'));
document.getElementById('hideBtn').addEventListener('click', hideToolbar);
menuSearch.addEventListener('input', (event) => renderTools(event.target.value));
toolSections.addEventListener('click', (event) => {
  const item = event.target.closest('.menu-item');
  if (!item) return;
  const id = item.dataset.id;
  if (id === 'search') return openMenu(true);
  if (id === 'inspect') return sendMessage('inspectElement');
  if (id === 'screenshot') return sendMessage('takeScreenshot');
  if (id === 'hide') return hideToolbar();
  if (id === 'preferences') return browserAPI.runtime.sendMessage({ action: 'openOptions' });
  if (item.dataset.path !== '') openTool(item.dataset.path);
  else openTool('');
});
document.addEventListener('click', (event) => { if (!toolbar.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && key === 'k') { event.preventDefault(); openMenu(true); }
  else if (key === '/' && document.activeElement !== menuSearch) { event.preventDefault(); openMenu(true); }
  else if (key === 'escape') { if (isMenuOpen) closeMenu(); else hideToolbar(); }
});

dragHandle.addEventListener('mousedown', (event) => { isDragging = true; const rect = toolbar.getBoundingClientRect(); dragOffset = { x: event.clientX - rect.left, y: event.clientY - rect.top }; toolbar.style.right = 'auto'; toolbar.style.transform = 'none'; });
document.addEventListener('mousemove', (event) => { if (!isDragging) return; toolbar.style.left = `${Math.max(8, Math.min(window.innerWidth - toolbar.offsetWidth - 8, event.clientX - dragOffset.x))}px`; toolbar.style.top = `${Math.max(8, Math.min(window.innerHeight - toolbar.offsetHeight - 8, event.clientY - dragOffset.y))}px`; });
document.addEventListener('mouseup', () => { if (!isDragging) return; isDragging = false; const rect = toolbar.getBoundingClientRect(); browserAPI.storage.local.set({ toolbarPosition: { x: rect.left, y: rect.top } }); });

browserAPI.storage.local.get(['toolbarPosition', 'toolbarHidden'], (result) => {
  if (result.toolbarPosition) { toolbar.style.right = 'auto'; toolbar.style.transform = 'none'; toolbar.style.left = `${result.toolbarPosition.x}px`; toolbar.style.top = `${result.toolbarPosition.y}px`; }
  if (result.toolbarHidden) toolbar.style.display = 'none';
});
