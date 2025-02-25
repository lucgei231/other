function Notify(message) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
        // If the user has granted permission, create a notification
        new Notification(message);
    } else if (Notification.permission === "denied") {
        // If the user has denied permission, wait 2 seconds and ask again
        setTimeout(() => {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }, 2000);
    } else {
        // If the user hasn't decided yet, ask for permission
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}

// Example usage
Notify("Hey!");
