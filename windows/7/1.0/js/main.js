// This file contains the main JavaScript logic for the web OS, handling window management, app launching, and user interactions.

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const startMenu = document.getElementById("start-menu");
    const apps = document.querySelectorAll(".app");

    startButton.addEventListener("click", function() {
        startMenu.classList.toggle("show");
    });

    apps.forEach(app => {
        app.addEventListener("click", function() {
            launchApp(app.dataset.app);
        });
    });

    function launchApp(appName) {
        const appWindow = document.createElement("div");
        appWindow.classList.add("app-window");
        appWindow.innerHTML = `
            <div class="app-header">
                <span>${appName}</span>
                <button class="close-btn">X</button>
            </div>
            <div class="app-content">
                <iframe src="apps/${appName}/index.html"></iframe>
            </div>
        `;
        document.body.appendChild(appWindow);

        const closeButton = appWindow.querySelector(".close-btn");
        closeButton.addEventListener("click", function() {
            document.body.removeChild(appWindow);
        });
    }
});s