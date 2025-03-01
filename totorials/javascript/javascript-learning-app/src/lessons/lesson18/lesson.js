// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson18/lesson.js
// Lesson 18: Understanding Promises in JavaScript

// Function to demonstrate a simple promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

// Function to handle the promise
function handleFetch() {
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

// Call the function to fetch data when the script loads
handleFetch();