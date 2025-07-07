# 🛒 Mini Shopping Cart - Complete Documentation

![Shopping Cart Preview](./assets/cart-preview.gif)

## Table of Contents
1. [Overview](#-overview)
2. [HTML Structure](#-html-structure)
3. [CSS Styling](#-css-styling)
4. [JavaScript Functionality](#-javascript-functionality)
5. [Core Algorithms](#-core-algorithms)
6. [Complete Code](#-complete-code)
7. [Usage Guide](#-usage-guide)
8. [Limitations](#-limitations)
9. [Enhancement Ideas](#-enhancement-ideas)

## 🌐 Overview

A functional shopping cart system that:
- Adds products to cart
- Removes items from cart
- Calculates running total
- Maintains cart state in memory

**Key Features:**
- ➕ Add products with one click
- ❌ Remove items individually
- 💰 Real-time total calculation
- 📱 Responsive design

## 🏗 HTML Structure

### Core Components
```html
<div id="productList">
  <!-- Product Items -->
  <div class="product" data-name="Laptop" data-price="60000">
    <span>Laptop - ₹60,000</span>
    <button>Add to Cart</button>
  </div>
  <!-- More products... -->
</div>

<div class="cart">
  <h3>Your Cart</h3>
  <div id="cartItems"></div> <!-- Cart items injected here -->
  <p><strong>Total: ₹<span id="total">0</span></strong></p>
</div>
```

## 🎨 CSS Styling

### Key Design Elements
```css
/* Product and Cart Item Styling */
.product, .cart-item {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

/* Button Styling */
button {
  padding: 5px 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.cart {
  margin-top: 30px; /* Separation from product list */
}
```

## ⚙ JavaScript Functionality

### 1. Initialization
```javascript
const cartItems = []; // Array to hold cart items
const cartDiv = document.getElementById('cartItems');
const totalSpan = document.getElementById('total');
```

### 2. Cart Update Function
```javascript
function updateCart() {
  cartDiv.innerHTML = ''; // Clear current cart display
  let total = 0; // Reset total

  // Rebuild cart UI
  cartItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartDiv.appendChild(div);
    total += item.price; // Accumulate total
  });

  totalSpan.textContent = total; // Update total display
}
```

### 3. Remove Item Function
```javascript
function removeItem(index) {
  cartItems.splice(index, 1); // Remove item from array
  updateCart(); // Refresh display
}
```

### 4. Add to Cart Event Listeners
```javascript
document.querySelectorAll('.product button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const product = e.target.parentElement;
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price);
    cartItems.push({ name, price }); // Add to cart
    updateCart(); // Refresh display
  });
});
```

## 🔢 Core Algorithms

### 1. Cart Management Algorithm
1. **Add Item**:
   - Capture product data from DOM attributes
   - Push new item to `cartItems` array
   - Trigger UI update

2. **Remove Item**:
   - Identify item by index
   - Remove from `cartItems` array
   - Trigger UI update

3. **Update Display**:
   ```mermaid
   graph TD
     A[Start] --> B[Clear Cart Display]
     B --> C[Initialize Total=0]
     C --> D{Loop Items}
     D -->|Item| E[Create Cart Element]
     E --> F[Add to DOM]
     F --> G[Add to Total]
     D -->|Done| H[Update Total Display]
   ```

### 2. Total Calculation
```javascript
let total = 0;
cartItems.forEach(item => {
  total += item.price;
});
```
- **Complexity**: O(n) linear time
- **Edge Cases**: Handles empty cart (total=0)

## 📝 Complete Code

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* All CSS styles */
  </style>
</head>
<body>
  <!-- Shopping Cart HTML -->
  <script>
    // All JavaScript functions
  </script>
</body>
</html>
```

## 🛠 Usage Guide

1. **Adding Products**:
   - Click "Add to Cart" on any product
   - Item appears in cart section
   - Total updates automatically

2. **Removing Items**:
   - Click "Remove" next to any cart item
   - Item disappears from cart
   - Total updates automatically

3. **Viewing Cart**:
   - All items displayed in list format
   - Running total shown at bottom
   - Empty cart shows "Total: ₹0"

## ⚠ Limitations

- No persistent storage (cart clears on refresh)
- No quantity adjustment
- No product images
- No checkout functionality
- Basic error handling

## 💡 Enhancement Ideas

### 1. Local Storage Persistence
```javascript
// Save
localStorage.setItem('cart', JSON.stringify(cartItems));

// Load on init
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
cartItems.push(...savedCart);
updateCart();
```

### 2. Quantity Management
```javascript
// Modify cart item structure
{
  name: "Laptop",
  price: 60000,
  quantity: 1  // Add this
}

// Update total calculation
total += item.price * item.quantity;
```

### 3. Product Images
```html
<div class="product" data-name="Laptop" data-price="60000" data-image="laptop.jpg">
  <img src="laptop.jpg" width="50">
  <!-- rest of product -->
</div>
```

### 4. Checkout Functionality
```javascript
function checkout() {
  if (cartItems.length === 0) return alert("Cart is empty!");
  alert(`Order placed! Total: ₹${total}`);
  cartItems.length = 0;
  updateCart();
}
```

## Browser Support
- All modern browsers
- IE11+ (with polyfills for `forEach`)
- Mobile browsers

---

**Implementation Notes**:
1. Save as `shopping-cart.html`
2. No dependencies required
3. Works offline
4. Easy to extend with backend integration