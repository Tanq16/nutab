chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.pendingUrl === 'chrome://newtab/' || tab.url === 'chrome://newtab/') {
    chrome.storage.sync.get(['redirectUrl', 'isEnabled'], (result) => {
      if (result.isEnabled && result.redirectUrl) {
        chrome.tabs.update(tab.id, { url: result.redirectUrl });
      }
    });
  }
});
