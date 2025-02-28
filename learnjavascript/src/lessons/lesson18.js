// Lesson 18: Asynchronous JavaScript - Promises and Async/Await

// This lesson will cover how to work with asynchronous operations in JavaScript using Promises and the async/await syntax.

// Example of a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

// Using the Promise
fetchData()
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Example of async/await
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchDataAsync();