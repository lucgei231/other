// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson23/lesson.js

// Lesson 23: Understanding Promises in JavaScript

// This lesson will cover how to create and use Promises in JavaScript.
// Promises are a way to handle asynchronous operations in a more manageable way.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000); // Simulating a 2-second delay
    });
}

function displayData() {
    fetchData()
        .then(data => {
            console.log(data.message);
            document.getElementById("output").innerText = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("output").innerText = "Error fetching data.";
        });
}

// Call the displayData function to execute the promise
displayData();