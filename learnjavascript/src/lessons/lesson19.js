// Lesson 19: Understanding Promises and Async/Await in JavaScript

// This lesson will cover the concept of Promises and how to use async/await for handling asynchronous operations in JavaScript.

// Example of a Promise
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
};

// Using the Promise
fetchData("https://api.example.com/data")
    .then(response => {
        console.log(response.message);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Example of async/await
const fetchDataAsync = async (url) => {
    try {
        const response = await fetchData(url);
        console.log(response.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Calling the async function
fetchDataAsync("https://api.example.com/data");