document.addEventListener('DOMContentLoaded', () => {
    const editorContainer = document.getElementById('editor');
    const outputFrame = document.getElementById('output');
    const runButton = document.getElementById('run');
    const downloadButton = document.getElementById('download');

    // Initialize the integrated code editor
    const editor = CodeMirror(editorContainer, {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'default',
        value: '// Write your JavaScript code here\n'
    });

    // Function to run the code and display output
    runButton.addEventListener('click', () => {
        const userCode = editor.getValue();
        const output = outputFrame.contentWindow.document;
        output.open();
        output.write('<html><body><script>' + userCode + '</script></body></html>');
        output.close();
    });

    // Function to download the code as a file
    downloadButton.addEventListener('click', () => {
        const userCode = editor.getValue();
        const blob = new Blob([userCode], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lesson01_script.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});