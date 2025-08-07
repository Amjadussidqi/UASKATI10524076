document.getElementById('transaction-form').addEventListener('submit', function(event) {
    // Mencegah form mengirim data dengan cara biasa
    event.preventDefault();

    // Mengambil nilai dari setiap input di form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Membuat parameter URL dari data yang diambil
    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        address: address,
        product: product,
        quantity: quantity
    });

    // Mengalihkan halaman ke invoice.html dengan membawa data di URL
    window.location.href = `invoice.html?${queryParams.toString()}`;
});
