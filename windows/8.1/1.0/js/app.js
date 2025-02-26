// app.js

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const taskbar = document.getElementById('taskbar');

    startButton.addEventListener('click', function() {
        startMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
            startMenu.classList.remove('open');
        }
    });

    // Function to open applications
    function openApp(appName) {
        const appWindow = document.createElement('div');
        appWindow.className = 'app-window';
        appWindow.innerHTML = `<h2>${appName}</h2><button class="close-btn">Close</button>`;
        document.body.appendChild(appWindow);

        const closeButton = appWindow.querySelector('.close-btn');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(appWindow);
        });
    }

    // Example of opening an app
    const exampleAppButton = document.getElementById('example-app-button');
    exampleAppButton.addEventListener('click', function() {
        openApp('Example App');
    });
});