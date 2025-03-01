// filepath: /javascript-learning-app/javascript-learning-app/src/app.js

document.addEventListener("DOMContentLoaded", function() {
    const downloadButtons = document.querySelectorAll('.download-html');
    const jsDownloadButtons = document.querySelectorAll('.download-js');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lessonName = this.dataset.lesson;
            downloadFile(`${lessonName}/lesson.html`, `${lessonName}.html`);
        });
    });

    jsDownloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lessonName = this.dataset.lesson;
            downloadFile(`${lessonName}/lesson.js`, `${lessonName}.js`);
        });
    });

    function downloadFile(filePath, fileName) {
        fetch(filePath)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(err => alert('Error downloading file:', err));
    }

    // Function to render graphical previews for each lesson
    function renderPreviews() {
        const previews = document.querySelectorAll('.lesson-preview');
        previews.forEach(preview => {
            const lessonName = preview.dataset.lesson;
            const img = document.createElement('img');
            img.src = `${lessonName}/preview.png`; // Assuming each lesson has a preview image
            img.alt = `Preview of ${lessonName}`;
            img.style.width = '100%'; // Adjust as needed
            preview.appendChild(img);
        });
    }

    renderPreviews();
});