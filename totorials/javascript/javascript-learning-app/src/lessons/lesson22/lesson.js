// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson22/lesson.js

// Lesson 22: Understanding Promises in JavaScript

// This lesson will cover the basics of Promises in JavaScript, including how to create and use them.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
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

// Call the displayData function to see the promise in action
displayData();