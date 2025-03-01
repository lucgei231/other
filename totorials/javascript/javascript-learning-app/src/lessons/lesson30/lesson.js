// Lesson 30: Advanced JavaScript Concepts

// This lesson covers advanced topics such as closures, promises, and async/await.

// Closure Example
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Promise Example
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

// Async/Await Example
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();