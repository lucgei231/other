function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('download-html').addEventListener('click', function() {
    const lessonNumber = document.getElementById('lesson-select').value;
    fetch(`lessons/lesson${lessonNumber}.html`)
        .then(response => response.text())
        .then(data => downloadFile(`lesson${lessonNumber}.html`, data));
});

document.getElementById('download-js').addEventListener('click', function() {
    const lessonNumber = document.getElementById('lesson-select').value;
    fetch(`lessons/lesson${lessonNumber}.js`)
        .then(response => response.text())
        .then(data => downloadFile(`lesson${lessonNumber}.js`, data));
});