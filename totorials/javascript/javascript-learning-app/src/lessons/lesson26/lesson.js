// Lesson 26: Understanding Promises in JavaScript

// A simple function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000); // Simulating a 2-second delay
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

// Call the function to fetch data
handleFetch();