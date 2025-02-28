// Lesson 15: Understanding Promises in JavaScript

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Example of creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Using the Promise
myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    });

// Example of a function that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the fetchData function
fetchData().then((data) => {
    console.log(data); // This will run after 2 seconds
});

// Lesson 15 Exercise: Create a Promise that simulates a network request
function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
            if (isSuccess) {
                resolve("Network request successful!");
            } else {
                reject("Network request failed!");
            }
        }, 1500); // Simulate a 1.5-second delay
    });
}

// Using the simulateNetworkRequest function
simulateNetworkRequest()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });