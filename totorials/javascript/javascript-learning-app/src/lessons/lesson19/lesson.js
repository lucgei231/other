// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson19/lesson.js
function lesson19Function() {
    // This function demonstrates the use of Promises in JavaScript.
    const promise = new Promise((resolve, reject) => {
        const success = true; // Change this to false to see the rejection
        setTimeout(() => {
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 2000);
    });

    promise
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
lesson19Function();