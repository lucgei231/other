// script.js
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fileInput = document.getElementById('fileInput');
    const statusMessage = document.getElementById('statusMessage');
  
    if (fileInput.files.length === 0) {
      statusMessage.textContent = 'Please select a .jar file to upload.';
      statusMessage.style.color = 'red';
    } else {
      const file = fileInput.files[0];
  
      if (file.name.endsWith('.jar')) {
        statusMessage.textContent = `Uploading "${file.name}"...`;
        statusMessage.style.color = 'green';
  
        // Placeholder for further processing logic, e.g., uploading to a server.
        setTimeout(() => {
          statusMessage.textContent = `"${file.name}" has been successfully uploaded!`;
        }, 2000);
      } else {
        statusMessage.textContent = 'Only .jar files are allowed.';
        statusMessage.style.color = 'red';
      }
    }
  });
  