// Script ini akan berjalan di halaman transaksi.html dan struk.html

document.addEventListener('DOMContentLoaded', function() {

    // LOGIKA UNTUK HALAMAN TRANSAKSI (transaksi.html)
    const transactionForm = document.getElementById('transactionForm');

    // Jika form transaksi ditemukan di halaman ini
    if (transactionForm) {
        transactionForm.addEventListener('submit', function(event) {
            // 1. Mencegah form mengirim data dengan cara lama
            event.preventDefault();

            // 2. Mengambil data dari setiap input di form
            const transactionData = {
                id: 'INV' + Date.now(), // Membuat ID unik untuk invoice
                date: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                name: document.getElementById('nama').value,
                product: document.getElementById('produk').value,
                quantity: document.getElementById('jumlah').value,
                address: document.getElementById('alamat').value,
                payment: document.querySelector('input[name="pembayaran"]:checked').value
            };

            // 3. Menyimpan data transaksi di localStorage (penyimpanan browser)
            localStorage.setItem('transactionData', JSON.stringify(transactionData));
            
            // 4. Memberi notifikasi dan pindah ke halaman struk
            alert('Transaksi Berhasil! Mengalihkan ke halaman struk...');
            window.location.href = 'struk.html';
        });
    }

    // LOGIKA UNTUK HALAMAN STRUK (struk.html)
    const invoiceDetails = document.getElementById('invoice-details');

    // Jika elemen untuk detail invoice ditemukan di halaman ini
    if (invoiceDetails) {
        // 1. Mengambil data transaksi dari localStorage
        const data = localStorage.getItem('transactionData');

        if (data) {
            const transactionData = JSON.parse(data);

            // 2. Menampilkan data ke dalam elemen-elemen di halaman struk
            document.getElementById('invoice-id').textContent = transactionData.id;
            document.getElementById('invoice-date').textContent = transactionData.date;
            document.getElementById('invoice-nama').textContent = transactionData.name;
            // ... dan seterusnya untuk semua field di struk.html (pastikan ID-nya sesuai)

        } else {
            // Jika pengguna langsung membuka struk.html tanpa transaksi
            invoiceDetails.innerHTML = '<p>Tidak ada data transaksi.</p>';
        }
    }
});
