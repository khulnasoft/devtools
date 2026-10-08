# Dev Tools Browser Extension

A browser extension that provides quick access to developer tools from any webpage, similar to the Vercel Toolbar.

## Features

- **Quick Tool Access**: Search and access 20+ developer tools directly from the extension popup
- **Page Inspection**: Inspect elements on any webpage with a single click
- **Screenshot Capture**: Take screenshots of the current page
- **Tool Injection**: Inject tools directly into the current page context
- **Customizable Preferences**: Configure appearance and behavior settings
- **Keyboard Shortcuts**: Open the popup with Ctrl+Shift+I (Cmd+Shift+I on Mac)

## Available Tools

### Crypto
- Token Generator
- Hash Text
- UUID Generator
- Password Strength Analyzer

### Converter
- Base64 String Converter
- Base64 File Converter
- Color Converter
- Case Converter
- JSON to YAML Converter

### Web
- URL Encoder
- HTML Entities
- JWT Parser
- User Agent Parser

### Development
- JSON Viewer
- Regex Tester
- Crontab Generator
- SQL Prettify

### Network
- IPv4 Subnet Calculator
- MAC Address Generator

## Installation

### Development Build

1. Clone the repository:
   ```bash
   git clone https://github.com/khulnasoft/devtools.git
   cd devtools
   ```

2. Build the extension:
   ```bash
   node extension/build.js
   ```

3. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right)
   - Click "Load unpacked"
   - Select the `dist-extension` directory

### Firefox Installation

1. Build the extension (see above)
2. Open `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file in the `dist-extension` directory

## Usage

### Opening the Popup

- Click the Dev Tools icon in your browser toolbar
- Or use the keyboard shortcut: `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac)

### Using Tools

1. Click the extension icon to open the popup
2. Search for a tool or browse by category
3. Click on a tool to open it in a new tab

### Page Inspection

1. Click the "🔍 Inspect Element" button in the popup
2. Hover over elements on the page to highlight them
3. Click an element to select it and view its details
4. Press `Escape` to exit inspection mode

### Taking Screenshots

1. Click the "📸 Screenshot" button in the popup
2. The screenshot will be automatically downloaded

### Preferences

1. Click the "⚙️ Preferences" button in the popup
2. Configure:
   - **Always Activate**: Show toolbar button on all pages
   - **Start Hidden**: Hide toolbar button by default
   - **Theme**: Choose between System, Light, or Dark theme

## Development

### Project Structure

```
extension/
├── manifest.json          # Extension manifest (Manifest V3)
├── browser-polyfill.js    # Cross-browser API polyfill
├── background.js          # Service worker
├── content-script.js      # Content script for page interaction
├── popup.html             # Popup UI
├── popup.js               # Popup logic
├── inject-tool.js         # Tool injection script
├── options.html           # Preferences page
├── options.js             # Preferences logic
├── icons/                 # Extension icons
├── build.js               # Build script
└── README.md              # This file
```

### Building

Run the build script to create a distributable version:

```bash
node extension/build.js
```

This will create a `dist-extension` directory with all necessary files.

### Adding New Tools

To add a new tool to the extension popup:

1. Edit `extension/popup.js`
2. Add the tool to the `toolsByCategory` array:
   ```javascript
   {
     name: 'Tool Name',
     icon: '🔧',
     url: 'https://devtools.khulnasoft.com/tool-slug',
   }
   ```

## Permissions

The extension requires the following permissions:

- `activeTab`: To interact with the current tab
- `storage`: To save user preferences
- `scripting`: To inject scripts into pages
- `<all_urls>`: To work on all websites

## Browser Support

- Chrome/Edge (Chromium-based browsers) - Version 88+
- Firefox - Version 109+
- Opera

The extension uses Manifest V3 and includes a browser API polyfill for cross-browser compatibility between Chrome's `chrome.*` API and Firefox's `browser.*` API.

## License

GNU GPLv3 - See [LICENSE](../LICENSE) for details

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/khulnasoft/devtools).

## Credits

Built by [KhulnaSoft](https://devtools.khulnasoft.com) as part of the Dev Tools project.
