// Lesson 5: Understanding Functions in JavaScript

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

// Example Usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8

// Exercise: Create a function that takes an array of numbers and returns the sum of all numbers.
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example Usage of Exercise
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15