function generateQRCode() {
    const formData = new FormData(document.getElementById('qr-form'));
    const qrData = {};
    
    formData.forEach((value, key) => {
      qrData[key] = value;
    });
  
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = ''; // Clear previous QR code
  
    const qrcode = new QRCode(qrCodeDiv, {
      text: JSON.stringify(qrData),
      width: 128,
      height: 128
    });
  
    // Show the download button
    document.getElementById('downloadBtn').style.display = 'block';
  }
  
  function downloadQRCode() {
    const qrCodeDiv = document.getElementById('qr-code');
    const qrCodeImage = qrCodeDiv.querySelector('img');
  
    if (qrCodeImage) {
      const imageDataURL = qrCodeImage.src;
      
      // Create a temporary link
      const downloadLink = document.createElement('a');
      downloadLink.href = imageDataURL;
      downloadLink.download = 'qrcode.png';
      
      // Trigger a click on the link to start the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
  