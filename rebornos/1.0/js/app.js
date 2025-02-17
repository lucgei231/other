document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startButton.addEventListener('click', () => {
        startMenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
            startMenu.classList.remove('show');
        }
    });

    const windows = [];

    function createWindow(title) {
        const windowElement = document.createElement('div');
        windowElement.classList.add('window');
        windowElement.innerHTML = `
            <div class="window-header">
                <span>${title}</span>
                <button class="close-button">X</button>
            </div>
            <div class="window-content">
                <p>This is a ${title} window.</p>
            </div>
        `;
        document.body.appendChild(windowElement);
        windows.push(windowElement);

        const closeButton = windowElement.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            windowElement.remove();
            windows.splice(windows.indexOf(windowElement), 1);
        });
    }

    document.getElementById('open-window-button').addEventListener('click', () => {
        createWindow('New');
    });
});