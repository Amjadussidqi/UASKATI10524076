document.getElementById('form-transaksi').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const produk = document.getElementById('produk').value;
    const jumlah = document.getElementById('jumlah').value;

    const queryParams = new URLSearchParams({
        nama: nama,
        email: email,
        alamat: alamat,
        produk: produk,
        jumlah: jumlah
    });

    window.location.href = `invoice.html?${queryParams.toString()}`;
});
