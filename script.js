// Menjalankan semua fungsi setelah halaman dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        // Tambahkan delay sedikit agar tidak terlalu cepat hilang
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // 0.5 detik delay
    });

    // --- LOGIKA ANIMASI SAAT SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Opsional: hapus class 'show' agar animasi berulang saat scroll balik
                // entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    // --- LOGIKA TOMBOL SCROLL KE ATAS ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Tampilkan tombol jika pengguna scroll ke bawah sejauh 200px
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // Fungsi saat tombol di-klik: scroll ke atas halaman
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll yang mulus
        });
    });

    // --- LOGIKA FORM TRANSAKSI (Sama seperti sebelumnya) ---
    const transactionForm = document.getElementById('transactionForm');
    if (transactionForm) {
        transactionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const transactionData = {
                id: 'INV' + Date.now(),
                date: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
                name: document.getElementById('nama').value,
                product: document.getElementById('produk').value,
                quantity: document.getElementById('jumlah').value,
                address: document.getElementById('alamat').value,
                payment: document.querySelector('input[name="pembayaran"]:checked').value
            };
            localStorage.setItem('transactionData', JSON.stringify(transactionData));
            alert('Transaksi Berhasil! Mengalihkan ke halaman struk...');
            window.location.href = 'struk.html';
        });
    }

    // --- LOGIKA HALAMAN STRUK (Sama seperti sebelumnya) ---
    // (Pastikan logika untuk menampilkan data di halaman struk juga ada di sini jika file JS ini digunakan di semua halaman)

});
