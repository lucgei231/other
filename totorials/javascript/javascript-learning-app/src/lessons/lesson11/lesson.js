// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson11/lesson.js
function lesson11Function() {
    // This function demonstrates how to use the Array.map() method
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    
    console.log("Original numbers:", numbers);
    console.log("Doubled numbers:", doubled);
}

// Call the function to see the output
lesson11Function();