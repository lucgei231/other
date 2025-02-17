document.getElementById('icon-btn').addEventListener('click', function() {
    document.getElementById('icon-input').click();
});

document.getElementById('icon-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var iconDataUrl = e.target.result;
            localStorage.setItem('webapp_icon', iconDataUrl);
            alert('Icon selected!');
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('save-btn').addEventListener('click', function () {
    var url = document.getElementById('url-input').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    localStorage.setItem('webapp_url', url);
    window.location.href = 'redirect.html';
});
