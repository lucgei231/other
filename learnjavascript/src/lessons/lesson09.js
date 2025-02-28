// Lesson 09: Understanding Asynchronous JavaScript with Promises

// This lesson will cover the basics of Promises in JavaScript, including how to create and use them.
// It will also demonstrate how to handle asynchronous operations using Promises.

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
            document.getElementById('output').innerText = data.message;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById('output').innerText = "Error fetching data.";
        });
}

// Call the displayData function to see the Promise in action
displayData();