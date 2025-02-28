// Lesson 11: Understanding Promises in JavaScript

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Creating a new promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Using the promise
myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    });

// Example of a function that returns a promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the fetchData function
fetchData().then((data) => {
    console.log(data); // This will log "Data fetched!" after 2 seconds
});