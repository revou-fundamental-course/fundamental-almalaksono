document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const resultContainer = document.getElementById('result');
    const currentTimeContainer = document.getElementById('currentTime');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;

        // Get current time
        const currentTime = new Date().toLocaleString();

        // Display the results
        resultContainer.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
            <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;

        // Display the current time
        currentTimeContainer.textContent = `Form submitted at: ${currentTime}`;
    });
});
