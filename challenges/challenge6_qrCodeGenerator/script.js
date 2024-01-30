document.addEventListener("DOMContentLoaded", function () {
    const mainTag = document.getElementsByTagName('main')[0];
    const headerPart = document.getElementById('headerPart');
    const qrCode = document.getElementById("qrcode");
    const searchPagePart = document.getElementById('searchPagePart');
    const loaderPagePart = document.getElementById('loaderPagePart');
    const qrCodePagePart = document.getElementById('qrCodePagePart');

    // Function to generate QR code
    function generateQRCode() {
        // Hide search page part - part 1
        searchPagePart.style.display = 'none';

        // Show Loader page - part 2
        loaderPagePart.style.display = 'flex';
        mainTag.style.height = 'inherit';


        // Get the data (you can replace this with your desired data)
        const dataToEncode = "Hello, QR Code!";

        // Clear any existing QR code
        qrCode.innerHTML = "";

        // Create a new instance of QRCode and generate the QR code
        const qrcode = new QRCode(qrCode, {
            text: dataToEncode,
            width: 184,
            height: 184,
        });

        // Wait for 5 seconds
        setTimeout(function () {
            // Hide Loader page part - part 2
            loaderPagePart.style.display = 'none';
            mainTag.style.height = 'auto';

            // Show QR code page part - part 3
            if (qrcode) {
                qrCodePagePart.style.display = 'flex';
                headerPart.style.display = "block";
            }
        }, 5000);
    }

    // Add a click event listener to the button
    document.getElementById("generateQRButton").addEventListener("click", generateQRCode);
});