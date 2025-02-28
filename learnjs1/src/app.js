// This file contains the JavaScript code that handles user interactions. 
// It includes functions to execute the JavaScript commands entered by the user, 
// display the output, and provide step-by-step guidance on writing JavaScript.

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('js-command');
    const outputArea = document.getElementById('output');
    const runButton = document.getElementById('run-button');

    runButton.addEventListener('click', () => {
        const command = inputField.value;
        try {
            const result = eval(command);
            outputArea.textContent = `Output: ${result}`;
        } catch (error) {
            outputArea.textContent = `Error: ${error.message}`;
        }
    });
});