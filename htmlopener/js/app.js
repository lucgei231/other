document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/html') {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('display-area').innerHTML = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert('Please select a valid HTML file.');
    }
});

document.getElementById('fullscreen-button').addEventListener('click', function() {
    const displayArea = document.getElementById('display-area');
    if (displayArea.requestFullscreen) {
        displayArea.requestFullscreen();
    } else if (displayArea.mozRequestFullScreen) { // Firefox
        displayArea.mozRequestFullScreen();
    } else if (displayArea.webkitRequestFullscreen) { // Chrome, Safari and Opera
        displayArea.webkitRequestFullscreen();
    } else if (displayArea.msRequestFullscreen) { // IE/Edge
        displayArea.msRequestFullscreen();
    }
});