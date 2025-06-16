
function uploadPDF() {
  const fileInput = document.getElementById('pdfInput');
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a PDF file.');
    return;
  }
  const formData = new FormData();
  formData.append('file', file);
  document.getElementById('status').textContent = 'Uploading...';
  fetch('http://localhost:5000/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'images.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
    document.getElementById('status').textContent = 'Download ready!';
  })
  .catch(err => {
    console.error(err);
    document.getElementById('status').textContent = 'Error uploading file.';
  });
}
