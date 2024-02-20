const serverControlButton = document.getElementById("serverControlButton");
const statusMessage = document.getElementById("statusMessage");

let serverRunning = false;

// Retrieve saved state from local storage
chrome.storage.local.get(["serverRunning"], (result) => {
  serverRunning = result.serverRunning || false;
  updateButtonAndStatus();
});

serverControlButton.addEventListener("click", () => {
  serverRunning = !serverRunning;
  updateButtonAndStatus();

  chrome.runtime.sendMessage({
    type: "toggleServer",
    isRunning: serverRunning,
  });

  chrome.storage.local.set({ serverRunning });
});

function updateButtonAndStatus() {
  if (serverRunning) {
    serverControlButton.textContent = "Stop Server";
    statusMessage.textContent = "Server Running";
  } else {
    serverControlButton.textContent = "Start Server";
    statusMessage.textContent = "Server Stopped";
  }
}
