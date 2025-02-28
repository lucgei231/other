// This file contains the JavaScript code examples and exercises for lesson 12.
// Lesson 12: Understanding Promises in JavaScript

// A simple example of creating a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

// Using the promise
fetchData()
    .then(response => {
        console.log(response.message);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Example of handling multiple promises
function fetchMultipleData() {
    const promise1 = fetchData();
    const promise2 = fetchData();

    Promise.all([promise1, promise2])
        .then(responses => {
            console.log("Both promises resolved:", responses);
        })
        .catch(error => {
            console.error("One of the promises failed:", error);
        });
}

// Call the function to fetch multiple data
fetchMultipleData();