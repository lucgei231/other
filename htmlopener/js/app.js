document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const displayArea = document.getElementById('display-area');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                displayArea.innerHTML = e.target.result;
                // Execute embedded scripts
                const scripts = displayArea.getElementsByTagName('script');
                for (let i = 0; i < scripts.length; i++) {
                    eval(scripts[i].innerText);
                }
            };

            reader.readAsText(file);
        } else {
            alert('Please select a file.');
        }
    });
});