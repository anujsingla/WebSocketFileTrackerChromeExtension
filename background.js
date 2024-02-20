const websocketUrl = "ws://localhost:9995";
let ws;

function connectWebSocket() {
  ws = new WebSocket(websocketUrl);

  ws.onopen = () => {
    console.log("WebSocket connected to extension");
  };

  ws.onmessage = (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (e) {
      console.error("Error parsing message data:", e);
      return;
    }
    console.log("Received message in extension:", message);
    if (message.command === "refresh") {
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          try {
            if (!tab.url || !message.host) {
              return;
            }
            // Safely attempt to create URL object
            const tabUrl = new URL(tab.url);
            const messageUrl = new URL(message.host);

            // Check if the tab's hostname matches the message's hostname
            if (tabUrl.hostname === messageUrl.hostname) {
              // refresh the tab
              chrome.tabs.reload(tab.id);
              console.log("Tab ID:", tab.id, "Tab URL:", tab.url);
            }
          } catch (e) {
            console.error("Error with URL construction or tab reload:", e);
          }
        });
      });
    }
  };
}

function disconnectWebSocket() {
  if (ws) {
    ws.close();
    ws = null;
  }
}

// Listening for the popup request
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("background addListener");
  if (request.type === "toggleServer") {
    if (request.isRunning) {
      connectWebSocket(); // Establish connection
      console.log("background addListener start");
    } else {
      disconnectWebSocket();
      console.log("background addListener stop");
    }
  }
});
