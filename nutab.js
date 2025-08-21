function performRedirect() {
    chrome.storage.sync.get(['redirectUrl', 'isEnabled'], (result) => {
        const { isEnabled, redirectUrl } = result;
        if (isEnabled && redirectUrl) {
            window.location.replace(redirectUrl);
        } else {
            // If the redirect is disabled or no URL is set,
            // the page will remain blank. You could add a
            // message here if you wanted.
        }
    });
}

performRedirect();
