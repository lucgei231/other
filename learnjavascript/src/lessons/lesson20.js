// Lesson 20: Advanced JavaScript Concepts

// In this lesson, we will cover advanced JavaScript concepts such as closures, promises, and async/await.
// These concepts are essential for writing modern JavaScript applications and understanding how to handle asynchronous operations.

// Closure example
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(data => console.log(data.message))
    .catch(error => console.error("Error:", error));

// Async/Await example
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();