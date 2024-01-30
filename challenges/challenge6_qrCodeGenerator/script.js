document.addEventListener("DOMContentLoaded", function () {
    // Function to generate QR code
    function generateQRCode() {
        // Hide search page part - part 1
        document.getElementById('searchPagePart').style.display = 'none';

        // Show Loader page - part 2
        document.getElementById('loaderPagePart').style.display = 'flex';

        // Get the data (you can replace this with your desired data)
        const dataToEncode = "Hello, QR Code!";

        // Clear any existing QR code
        document.getElementById("qrcode").innerHTML = "";

        // Create a new instance of QRCode and generate the QR code
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: dataToEncode,
            width: 128,
            height: 128,
        });

        // Wait for 5 seconds
        setTimeout(function () {
            // Hide Loader page part - part 2
            document.getElementById('loaderPagePart').style.display = 'none';

            // Show QR code page part - part 3
            if (qrcode) {
                document.getElementById('qrCodePagePart').style.display = 'flex';
            }
        }, 5000);
    }

    // Add a click event listener to the button
    document.getElementById("generateQRButton").addEventListener("click", generateQRCode);
});