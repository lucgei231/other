// Lesson 07: Understanding Functions in JavaScript

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Using the functions
console.log(greet("Student")); // Output: Hello, Student!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 7)); // Output: 28

// Example of a function that returns another function
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Higher-order function example
function higherOrderFunction(callback) {
    const result = callback(2, 3);
    console.log(`The result is: ${result}`);
}

higherOrderFunction(add); // Output: The result is: 5