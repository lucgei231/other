// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson03/lesson.js
function lessonThreeFunction() {
    // This function demonstrates a simple JavaScript feature: working with arrays.
    const fruits = ['Apple', 'Banana', 'Cherry'];
    
    // Display the fruits in the console
    console.log('Fruits:', fruits);
    
    // Add a new fruit to the array
    fruits.push('Date');
    console.log('Updated Fruits:', fruits);
    
    // Loop through the array and display each fruit
    fruits.forEach(fruit => {
        console.log('Fruit:', fruit);
    });
}

// Call the function to execute the lesson code
lessonThreeFunction();