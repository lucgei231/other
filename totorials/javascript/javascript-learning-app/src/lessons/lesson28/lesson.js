// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson28/lesson.js
function lesson28Function() {
    // This function demonstrates a simple JavaScript feature
    const message = "Welcome to Lesson 28: Understanding Promises!";
    console.log(message);

    // Example of a Promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds!");
        }, 2000);
    });

    myPromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error("Promise rejected:", error);
    });
}

// Call the function to execute the lesson code
lesson28Function();