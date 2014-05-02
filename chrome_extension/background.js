chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("SLEEPING CORGIS!!...")
  chrome.tabs.executeScript(null, {
    file: "sleepingcorgis.js"
  });
});
