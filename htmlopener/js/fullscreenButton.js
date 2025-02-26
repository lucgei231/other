document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButton = document.createElement('button');
    fullscreenButton.textContent = 'Fullscreen';
    fullscreenButton.id = 'fullscreen-button';
    document.body.appendChild(fullscreenButton);

    fullscreenButton.addEventListener('click', function() {
        const container = document.querySelector('.container');
        container.classList.toggle('fullscreen');
    });
});