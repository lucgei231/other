```javascript
const lessons = [
    { title: "Lesson 1: Introduction to JavaScript", file: "lessons/lesson1.js" },
    { title: "Lesson 2: Variables and Data Types", file: "lessons/lesson2.js" },
    { title: "Lesson 3: Functions in JavaScript", file: "lessons/lesson3.js" },
    { title: "Lesson 4: Control Structures", file: "lessons/lesson4.js" },
    { title: "Lesson 5: Arrays", file: "lessons/lesson5.js" },
    { title: "Lesson 6: Objects", file: "lessons/lesson6.js" },
    { title: "Lesson 7: DOM Manipulation", file: "lessons/lesson7.js" },
    { title: "Lesson 8: Events", file: "lessons/lesson8.js" },
    { title: "Lesson 9: Promises and Async/Await", file: "lessons/lesson9.js" },
    { title: "Lesson 10: Error Handling", file: "lessons/lesson10.js" },
];

function loadLesson(lesson) {
    import(`./${lesson.file}`)
        .then(module => {
            const lessonFunction = module.default;
            lessonFunction();
        })
        .catch(err => {
            console.error("Error loading lesson:", err);
        });
}

function initializeApp() {
    const lessonContainer = document.getElementById("lesson-container");
    lessons.forEach((lesson, index) => {
        const button = document.createElement("button");
        button.innerText = lesson.title;
        button.addEventListener("click", () => loadLesson(lesson));
        lessonContainer.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);