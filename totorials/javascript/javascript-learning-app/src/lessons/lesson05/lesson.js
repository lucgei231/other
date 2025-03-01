// Lesson 5: Functions in JavaScript

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

// Testing the functions
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 2)); // Output: 8

// Exporting functions for use in lesson.html
export { greet, add, multiply };