// filepath: /javascript-learning-app/javascript-learning-app/src/lessons/lesson12/lesson.js

// Lesson 12: Understanding JavaScript Objects

// Create a simple object
const person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Accessing object properties
console.log(person.name); // Output: John Doe
console.log(person.age);  // Output: 30

// Calling the greet method
person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

// Adding a new property
person.job = "Developer";
console.log(person.job); // Output: Developer

// Updating an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.job;
console.log(person.job); // Output: undefined

// Creating an object using a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Creating a new instance of Car
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar); // Output: Car { make: 'Toyota', model: 'Corolla', year: 2020 }