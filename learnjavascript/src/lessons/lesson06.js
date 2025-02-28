// Lesson 06: Understanding Functions in JavaScript

// A function is a block of code designed to perform a particular task. 
// Functions are executed when they are called or invoked.

// Example of a simple function
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("World")); // Output: Hello, World!

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Calling the function with and without the second parameter
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5

// Function expression
const square = function(x) {
    return x * x;
};

// Calling the function expression
console.log(square(4)); // Output: 16

// Arrow function
const add = (x, y) => x + y;

// Calling the arrow function
console.log(add(3, 7)); // Output: 10

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// Higher-order function
function higherOrderFunction(callback) {
    const result = callback(5);
    console.log(result);
}

// Passing a function as an argument
higherOrderFunction(square); // Output: 25

// Conclusion: Functions are a fundamental part of JavaScript, allowing for code reusability and modularity.