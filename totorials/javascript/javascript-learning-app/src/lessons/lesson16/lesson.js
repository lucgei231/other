// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson16/lesson.js
function lesson16Function() {
    // This function demonstrates the use of Promises in JavaScript.
    const myPromise = new Promise((resolve, reject) => {
        const success = true; // Change this to false to see the rejection
        setTimeout(() => {
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise was rejected.");
            }
        }, 2000);
    });

    myPromise
        .then((message) => {
            console.log(message);
            document.getElementById("output").innerText = message;
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("output").innerText = error;
        });
}

// Call the function to execute the lesson code
lesson16Function();