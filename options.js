function saveOptions(e) {
    e.preventDefault();
    const urlInput = document.getElementById('url');
    let url = urlInput.value.trim();

    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    urlInput.value = url; // Update the input field with the formatted URL

    chrome.storage.sync.set({ redirectUrl: url }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 1500);
    });
}

function restoreOptions() {
    chrome.storage.sync.get('redirectUrl', (data) => {
        if (data.redirectUrl) {
            document.getElementById('url').value = data.redirectUrl;
        }
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('optionsForm').addEventListener('submit', saveOptions);
