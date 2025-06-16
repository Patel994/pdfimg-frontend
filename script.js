async function uploadPDF() {
  const fileInput = document.getElementById("pdfInput");
  const format = document.getElementById("format").value;
  const status = document.getElementById("status");

  if (fileInput.files.length === 0) {
    status.textContent = "Please select a file first.";
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("format", format);

  status.textContent = "Uploading and converting...";

  try {
    const response = await fetch("https://pdf2img-backend-5.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted_output.zip";
    a.click();
    status.textContent = "Download started!";
  } catch (err) {
    status.textContent = "Error uploading file.";
    console.error(err);
  }
}


