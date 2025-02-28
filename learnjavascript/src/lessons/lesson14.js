// Lesson 14: Understanding Promises in JavaScript

// This lesson will cover the concept of Promises, how to create them, and how to handle asynchronous operations using Promises.

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Handling the Promise
myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    });

// Example of using Promises with setTimeout
function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This message is delayed by 2 seconds.");
        }, 2000);
    });
}

// Using the delayedMessage function
delayedMessage().then((message) => {
    console.log(message);
});

// Chaining Promises
myPromise
    .then((message) => {
        console.log(message);
        return delayedMessage();
    })
    .then((delayedMessage) => {
        console.log(delayedMessage);
    })
    .catch((error) => {
        console.error(error);
    });