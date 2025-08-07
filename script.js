document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        address: address,
        product: product,
        quantity: quantity
    });

    window.location.href = `invoice.html?${queryParams.toString()}`;
});
