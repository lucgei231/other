// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson27/lesson.js
// Lesson 27: Understanding Promises in JavaScript

// Function to demonstrate a simple promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000); // Simulate a 2-second delay
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