document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const displayArea = document.getElementById('display-area');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                displayArea.innerHTML = e.target.result;
            };

            reader.readAsText(file);
        } else {
            alert('Please select a file.');
        }
    });
});