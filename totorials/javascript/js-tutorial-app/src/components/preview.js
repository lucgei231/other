const previewContainer = document.createElement('div');
previewContainer.id = 'preview-container';
document.body.appendChild(previewContainer);

function updatePreview(code) {
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    previewContainer.innerHTML = ''; // Clear previous content
    previewContainer.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}

export { updatePreview };