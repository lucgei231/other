const lessons = Array.from({ length: 30 }, (_, i) => ({
    number: i + 1,
    title: `Lesson ${i + 1}`,
    jsCode: `// JavaScript code for Lesson ${i + 1}\nconsole.log('This is Lesson ${i + 1}');`
}));

function createDownloadLink(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function renderLessons() {
    const lessonsContainer = document.getElementById('lessons');
    lessons.forEach(lesson => {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'lesson';

        const title = document.createElement('h2');
        title.textContent = lesson.title;
        lessonDiv.appendChild(title);

        const codePreview = document.createElement('pre');
        codePreview.textContent = lesson.jsCode;
        lessonDiv.appendChild(codePreview);

        const downloadJsButton = document.createElement('button');
        downloadJsButton.textContent = 'Download as .js';
        downloadJsButton.onclick = () => createDownloadLink(lesson.jsCode, `lesson${lesson.number}.js`);
        lessonDiv.appendChild(downloadJsButton);

        const downloadHtmlButton = document.createElement('button');
        downloadHtmlButton.textContent = 'Download as HTML';
        downloadHtmlButton.onclick = () => createDownloadLink(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${lesson.title}</title>
</head>
<body>
    <h1>${lesson.title}</h1>
    <script src="lesson${lesson.number}.js"></scr`+`ipt>
</body>
</html>
`, `lesson${lesson.number}.html`);
        lessonDiv.appendChild(downloadHtmlButton);

        lessonsContainer.appendChild(lessonDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderLessons);