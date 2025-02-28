// filepath: /js-tutorial-app/js-tutorial-app/src/lessons/lesson02/script.js
document.addEventListener('DOMContentLoaded', () => {
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = '<h2>Lesson 02: Understanding Variables</h2><p>This lesson covers the basics of variables in JavaScript.</p>';

    const variableExample = () => {
        let greeting = 'Hello, World!';
        console.log(greeting);
        alert(greeting);
    };

    const runExampleButton = document.getElementById('run-example');
    runExampleButton.addEventListener('click', variableExample);
});