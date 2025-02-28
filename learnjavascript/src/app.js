const lessons = [];
const lessonCount = 20;

function loadLessons() {
    for (let i = 1; i <= lessonCount; i++) {
        lessons.push({
            title: `Lesson ${i}`,
            htmlFile: `lessons/lesson${i.toString().padStart(2, '0')}.html`,
            jsFile: `lessons/lesson${i.toString().padStart(2, '0')}.js`
        });
    }
}

function displayLessons() {
    const lessonContainer = document.getElementById('lesson-list');
    lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'lesson-item';
        lessonItem.innerHTML = `<button onclick="loadLesson(${index})">${lesson.title}</button>`;
        lessonContainer.appendChild(lessonItem);
    });
}

function loadLesson(index) {
    const lesson = lessons[index];
    const previewFrame = document.getElementById('preview-frame');
    previewFrame.src = lesson.htmlFile;
}

function downloadFile(filePath, fileType) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setupDownloadButtons() {
    const downloadContainer = document.getElementById('download-buttons');
    lessons.forEach((lesson, index) => {
        const downloadHtmlButton = document.createElement('button');
        downloadHtmlButton.innerText = `Download ${lesson.title} HTML`;
        downloadHtmlButton.onclick = () => downloadFile(lesson.htmlFile, 'html');
        
        const downloadJsButton = document.createElement('button');
        downloadJsButton.innerText = `Download ${lesson.title} JS`;
        downloadJsButton.onclick = () => downloadFile(lesson.jsFile, 'js');

        downloadContainer.appendChild(downloadHtmlButton);
        downloadContainer.appendChild(downloadJsButton);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadLessons();
    displayLessons();
    setupDownloadButtons();
});