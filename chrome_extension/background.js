chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("SLEEPING CORGIES!!...")
  chrome.tabs.executeScript(null, {
    file: "sleepingcorgies.js"
  });
});
