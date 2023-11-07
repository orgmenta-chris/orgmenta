// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.runtime.openOptionsPage();
  });