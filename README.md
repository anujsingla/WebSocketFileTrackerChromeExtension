# WebSocket File Watcher and Refresher Chrome Browser Extension

## Introduction

This is a Chrome browser extension that works alongside the [WebSocket File Tracker](https://github.com/anujsingla/WebSocketFileTracker) server. The extension listens for messages from the server and refreshes browser tabs based on the hostname provided in the received message. The tool is particularly useful in Salesforce development environments (LWC) or similar technologies, as it automates the refresh process, allowing developers to see their changes in real-time without needing to manually refresh the page. This streamlines the development workflow and helps developers to be more efficient.

## Features

- **Automated Tab Refresh**: Refreshes browser tabs in response to file changes detected by the WebSocket File Tracker server.
- **Hostname Matching**: Only tabs with a URL matching the hostname provided in the WebSocket message are refreshed, ensuring that only relevant tabs are updated.
- **Persistent Configuration**: Utilizes Chrome's storage to remember the server's running state between browser sessions.

## Installation

1. Clone or download this extension from GitHub:

   ```bash
   git clone https://github.com/anujsingla/SalesforceUIRefresherExtension.git
   cd SalesforceUIRefresherExtension
   ```

2. Navigate to `chrome://extensions/` in your Chrome browser.
3. Enable "Developer mode" at the top right of the page.
4. Click "Load unpacked" and select the directory containing the cloned or downloaded extension.
5. This Extension is now installed and ready for use.

## Usage

1. Ensure the [WebSocket File Tracker](https://github.com/anujsingla/WebSocketFileTracker) server is running and configured to watch your project directories.
2. Click the extension icon in your browser's toolbar to activate it. Click on the Start Server button and it will connect to the WebSocket server. You can see message in the server terminal.
3. When you save changes in the project files, the server detects these changes, and the extension refreshes the relevant tabs as per hostname.
4. You can toggle the extension's active state by clicking on the button.

## Configuration

The current version of the extension automatically connects to the WebSocket server at `ws://localhost:9995`. To change this or other configurations:

- Modify the `popup.js` file within the extension's source code to adjust the WebSocket server URL or other settings.
- Reload the extension from `chrome://extensions/` after making any changes.

## Support

For support, feature requests, or bug reporting, please open an issue in the [extension's GitHub repository](https://github.com/anujsingla/SalesforceUIRefresherExtension/issues).

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request with your proposed changes.
