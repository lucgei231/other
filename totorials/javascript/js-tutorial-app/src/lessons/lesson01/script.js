// filepath: /js-tutorial-app/js-tutorial-app/src/lessons/lesson01/script.js
document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('code-editor');
    const previewFrame = document.getElementById('preview-frame');
    const runButton = document.getElementById('run-button');

    runButton.addEventListener('click', () => {
        const code = editor.value;
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
    });
});