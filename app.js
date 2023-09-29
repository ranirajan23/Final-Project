 // Sample menu items data
const menuItems = [
    { name: 'Item 1', price: 15.99 },
    { name: 'Item 2', price: 12.99 },
    { name: 'Item 3', price: 11.99 },
    { name: 'Item 4', price: 14.99 },
    { name: 'Item 5', price: 14.99 },
    { name: 'Item 6', price: 12.99 },

];

// Initialize cart and total
let cart = [];
let total = 0;

// Function to add an item to the cart
function addToCart(itemIndex) {
    const selectedItem = menuItems[itemIndex];
    const itemPrice = selectedItem.price;
    const itemName = selectedItem.name;
    const quantity = parseInt(document.querySelectorAll('.quantity')[itemIndex].textContent);
    
    if (quantity > 0) {
        const existingItemIndex = cart.findIndex(item => item.name === itemName);
        if (existingItemIndex !== -1) {
            // Item already exists in the cart, update its quantity
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Item doesn't exist in the cart, add it
            cart.push({ name: itemName, price: itemPrice, quantity: quantity });
        }
        total += itemPrice * quantity;
        updateCartDisplay();
    }
}

// Function to remove an item from the cart by index
function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price * removedItem.quantity;
    updateCartDisplay();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    total = 0;
    updateCartDisplay();
}

// Function to increment the quantity of an item
function incrementQuantity(itemIndex) {
    const quantityElement = document.querySelectorAll('.quantity')[itemIndex];
    const currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}

// Function to decrement the quantity of an item
function decrementQuantity(itemIndex) {
    const quantityElement = document.querySelectorAll('.quantity')[itemIndex];
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (Quantity: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => addToCart(index));
});// Add event listeners to the quantity control buttons
const incrementButtons = document.querySelectorAll('.increment-button');
const decrementButtons = document.querySelectorAll('.decrement-button');
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => incrementQuantity(index));
});
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => decrementQuantity(index));
});

// Add event listener to the "Clear Cart" button
const clearCartButton = document.querySelector('.clear-cart-button');
clearCartButton.addEventListener('click', clearCart);

// Add event listener to the "Checkout" button
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click', () => {
    // Implement your checkout logic here
    alert('Thank you for your order! Total: $' + total.toFixed(2));
    clearCart();
});

// Initial cart display update
updateCartDisplay();

