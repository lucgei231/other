document.getElementById('save-btn').addEventListener('click', function () {
    var url = document.getElementById('url-input').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    localStorage.setItem('webapp_url', url);
    window.location.href = 'redirect.html';
});
