// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson13/lesson.js

// Lesson 13: Understanding JavaScript Promises

// Function to simulate an asynchronous operation using a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000); // Simulates a 2-second delay
    });
}

// Function to handle the fetched data
function handleData() {
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

// Call the handleData function when the script loads
handleData();