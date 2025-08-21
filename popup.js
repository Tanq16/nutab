document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const optionsLink = document.getElementById('optionsLink');

    chrome.storage.sync.get('isEnabled', (data) => {
        toggleSwitch.checked = !!data.isEnabled;
    });

    toggleSwitch.addEventListener('change', () => {
        chrome.storage.sync.set({ isEnabled: toggleSwitch.checked });
    });

    optionsLink.addEventListener('click', (event) => {
        event.preventDefault();
        chrome.runtime.openOptionsPage();
    });
});
