// Lesson 04: Functions in JavaScript

// This lesson covers the basics of functions, including function declaration, 
// function expression, and arrow functions. 

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

// Example usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 2)); // Output: 8

// Exporting functions for use in other lessons or files
export { greet, add, multiply };