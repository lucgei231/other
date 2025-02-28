function downloadFile(fileName, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadLessonFiles(lessonNumber) {
    const htmlContent = `<!-- HTML content for lesson ${lessonNumber} -->`;
    const jsContent = `// JavaScript content for lesson ${lessonNumber}`;
    
    downloadFile(`lesson${lessonNumber}.html`, htmlContent);
    downloadFile(`lesson${lessonNumber}.js`, jsContent);
}

export { downloadLessonFiles };