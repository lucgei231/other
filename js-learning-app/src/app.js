const lessons = [
    { title: "Lesson 1: Introduction to JavaScript", file: "lessons/lesson1.js" },
    { title: "Lesson 2: Control Structures", file: "lessons/lesson2.js" },
    { title: "Lesson 3: Functions in JavaScript", file: "lessons/lesson3.js" },
    // Add more lessons as needed
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