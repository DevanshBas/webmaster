let cart = [];

function addToCart(dish, price) {
    const quantity = parseInt(prompt("Enter the quantity:"));
    if (quantity && quantity > 0) {
        cart.push({ dish, quantity, price });
        document.getElementById('cart-count').innerText = cart.length;
        document.querySelector('.cart-icon').style.display = 'flex';
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.dish} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`;
        cartItemsContainer.appendChild(li);
        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Order placed successfully!');
    cart = [];
    document.getElementById('cart-count').innerText = 0;
    document.querySelector('.cart-icon').style.display = 'none';
    toggleCart();
}
