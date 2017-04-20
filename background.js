chrome.ISON = true;
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.browserAction.setIcon({
    path: chrome.ISON ? "off-19.png" : 'on-19.png'
  }, function() {
    chrome.ISON = !chrome.ISON;
  });
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse({ ison: chrome.ISON });
});