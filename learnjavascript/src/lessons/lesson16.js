// Lesson 16: Understanding Promises in JavaScript

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
            resolve("Data fetched after 2 seconds");
        }, 2000);
    });
}

// Using the fetchData function
fetchData().then((data) => {
    console.log(data); // Logs: Data fetched after 2 seconds
});

// Chaining Promises
fetchData()
    .then((data) => {
        console.log(data);
        return "Next step after fetching data";
    })
    .then((nextStep) => {
        console.log(nextStep);
    });