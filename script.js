const dropArea = document.getElementById("dropArea");
const pdfInput = document.getElementById("pdfInput");

// Prevent default behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, e => e.preventDefault());
  dropArea.addEventListener(eventName, e => e.stopPropagation());
});

// Highlight on drag
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'));
});
['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'));
});

// Handle drop
dropArea.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    pdfInput.files = files;
  }
});

