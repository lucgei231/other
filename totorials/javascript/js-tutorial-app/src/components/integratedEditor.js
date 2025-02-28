function initializeIntegratedEditor(containerId, initialCode) {
    const container = document.getElementById(containerId);
    const editor = document.createElement('textarea');
    editor.value = initialCode;
    editor.style.width = '100%';
    editor.style.height = '300px';
    container.appendChild(editor);

    const runButton = document.createElement('button');
    runButton.innerText = 'Run Code';
    container.appendChild(runButton);

    const outputFrame = document.createElement('iframe');
    outputFrame.style.width = '100%';
    outputFrame.style.height = '300px';
    container.appendChild(outputFrame);

    runButton.addEventListener('click', () => {
        const code = editor.value;
        const output = outputFrame.contentWindow.document;
        output.open();
        output.write(code);
        output.close();
    });
}

export { initializeIntegratedEditor };