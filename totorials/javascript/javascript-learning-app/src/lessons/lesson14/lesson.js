// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson14/lesson.js
function lesson14Function() {
    // Example function for Lesson 14
    const message = "Welcome to Lesson 14: Understanding Promises in JavaScript!";
    console.log(message);
    
    // Creating a promise
    const myPromise = new Promise((resolve, reject) => {
        const success = true; // Change this to false to see the reject case
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise was rejected.");
        }
    });

    // Handling the promise
    myPromise
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
}

// Call the function to execute the lesson code
lesson14Function();