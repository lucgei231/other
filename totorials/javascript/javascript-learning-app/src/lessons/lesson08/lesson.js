// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson08/lesson.js
function lesson08Function() {
    // This function demonstrates the use of arrays in JavaScript.
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    
    // Display the fruits in the console
    console.log('Fruits in the array:');
    fruits.forEach(fruit => {
        console.log(fruit);
    });

    // Example of adding a new fruit
    fruits.push('Elderberry');
    console.log('After adding a new fruit:');
    console.log(fruits);
}

// Call the function to execute the lesson code
lesson08Function();