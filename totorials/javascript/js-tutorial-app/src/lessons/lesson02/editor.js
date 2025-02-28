const integratedEditor = require('../../components/integratedEditor');
const preview = require('../../components/preview');
const download = require('../../components/download');

document.addEventListener('DOMContentLoaded', () => {
    const editorContainer = document.getElementById('editor');
    const previewContainer = document.getElementById('preview');
    const downloadButton = document.getElementById('download');

    integratedEditor.init(editorContainer);
    preview.init(previewContainer);
    
    downloadButton.addEventListener('click', () => {
        download.downloadFiles('lesson02');
    });
});