# 📘 Introduction to jQuery

A detailed guide to jQuery concepts, examples, and usage.

---

## 📜 History & Evolution of jQuery

* **Timeline:** jQuery launched in 2006
* **1.x:** Initial release with support for older browsers
* **2.x:** Removed support for IE6-8
* **3.x:** Performance and feature improvements

---

## 🔍 jQuery vs JavaScript

### ✅ JavaScript

* **Definition:** A high-level scripting language used for dynamic, interactive web content.
* **Support:** Native to all browsers.
* **Syntax:** Verbose, especially for DOM manipulation.
* **Performance:** Fast due to native execution.

**Example:**

```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Clicked!");
});
```

### ✅ jQuery

* **Definition:** A JavaScript library for easier DOM manipulation and event handling.
* **Built With:** JavaScript.
* **Syntax:** Shorter and more readable.
* **Features:** Animations, effects, AJAX, and more.

**Example:**

```js
$("#btn").click(function() {
  alert("Clicked!");
});
```

---

## ✅ Advantages of jQuery over Vanilla JS

* Simpler syntax: `$('#id')` vs `document.getElementById('id')`
* Cross-browser compatibility
* Shortened code for complex operations (animations, AJAX)

---

## 📦 jQuery Version Differences

* **1.x:** Supports older IE browsers
* **2.x:** Drops IE6–8
* **3.x:** Modern performance improvements

---

## 🔧 Installing jQuery

### CDN

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### Local

1. Download from [jquery.com](https://jquery.com)
2. Add to project folder and link like:

```html
<script src="js/jquery.min.js"></script>
```

---

## 🧑‍💻 Using jQuery with VS Code

* Create an HTML file
* Link jQuery via CDN or local
* Write jQuery inside `<script>` or separate `.js` file

---

## 🐞 Debugging jQuery Code

* Use `console.log()`
* Open browser developer tools
* Check loaded jQuery version in console: `$.fn.jquery`

---

## 🔎 jQuery Syntax & Selectors

* **Basic:** `$(selector).action()`
* **Selectors:**

  * `#id`
  * `.class`
  * `div`, `p`, `*`

**Example:**

```js
$('#myElement').css('color', 'red');
```

---

## 🎯 Event Handling in jQuery

### Why?

* Makes web pages interactive and dynamic

### Common Event Types

* **Mouse Events:** `click()`, `dblclick()`, `hover()`
* **Keyboard Events:** `keypress()`, `keydown()`
* **Form Events:** `submit()`, `focus()`, `blur()`
* **Event Delegation:** `$(parent).on('event', 'child', fn)`

### Mouse Events - click(), dblclick(), hover()

## click()

**Description**: Triggers when an element is clicked.

**Syntax**:
```javascript
$('#btn').click(function() {
  alert('Clicked!');
});
```

**Use Case**: Used for buttons, images, or any clickable elements.

---

## dblclick()

**Description**: Triggers when an element is double-clicked.

**Syntax**:
```javascript
$('#btn').dblclick(function() {
  alert('Double Clicked!');
});
```

---

## hover()

**Description**: Binds handlers for both mouseenter and mouseleave events.

**Syntax**:
```javascript
$('#btn').hover(
  function() {
    $(this).css('background-color', 'yellow');
  },
  function() {
    $(this).css('background-color', '');
  }
);
```


## Keyboard Events

### keypress()

**Description**: Fires when a key that produces a character value is pressed down.

**Syntax**:
```javascript
$('#input').keypress(function(event) {
  console.log('Key pressed:', String.fromCharCode(event.which));
});
```

**Notes**:
- Only triggers for keys that produce character input
- Use `event.which` to get the character code
- Deprecated in jQuery 3.0 (consider using `keydown` instead)

**Example Output**:
```
Key pressed: a
```

---

### keydown()

**Description**: Fires when any key is pressed down (including function keys).

**Syntax**:
```javascript
$('#input').keydown(function(event) {
  console.log('Key down - Key Code:', event.keyCode);
});
```

**Notes**:
- Triggers for all keys including Ctrl, Shift, etc.
- `event.keyCode` gives the physical key code
- Recommended for most keyboard interaction handling

**Example Output**:
```
Key down - Key Code: 13  (Enter key)
```

**Key Differences**:
| Feature        | keypress       | keydown        |
|---------------|---------------|---------------|
| Character keys | Yes           | Yes           |
| Function keys  | No            | Yes           |
| Modifier keys  | No            | Yes           |
| Key repeat     | Yes           | Yes           |
| Deprecated     | Yes (jQuery 3)| No            |

## Form Events

### submit()

**Description**: Triggers when a form is submitted.

**Syntax**:
```javascript
$('#form').submit(function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Form handling logic
  alert('Form submitted');
  
  // Optionally submit form programmatically
  // this.submit();
});
```

**Best Practices**:
- Always use `event.preventDefault()` to handle submission asynchronously
- Validate form data before processing
- Useful for AJAX form submissions

**Example Use Case**:
```javascript
$('#login-form').submit(function(e) {
  e.preventDefault();
  const username = $('#username').val();
  const password = $('#password').val();
  // Send to server...
});
```

---

### focus()

**Description**: Fires when an element gains focus (e.g., clicking into an input field).

**Syntax**:
```javascript
$('#input').focus(function() {
  $(this).css('background-color', 'lightblue');
  $(this).addClass('active-field');
});
```

**Common Uses**:
- Visual feedback for active fields
- Showing helper text
- Auto-selecting input content

**Example Enhancement**:
```javascript
$('input[type="text"]').focus(function() {
  $(this).select(); // Auto-selects all text
});
```

---

### blur()

**Description**: Fires when an element loses focus (e.g., tabbing away from an input field).

**Syntax**:
```javascript
$('#input').blur(function() {
  $(this).css('background-color', '');
  $(this).removeClass('active-field');
  
  // Often used for validation
  if (!$(this).val()) {
    $(this).addClass('error');
  }
});
```

**Common Patterns**:
- Field validation
- Clearing temporary UI states
- Auto-formatting input (phone numbers, etc.)

**Validation Example**:
```javascript
$('#email').blur(function() {
  const email = $(this).val();
  if (!isValidEmail(email)) {
    $(this).addClass('error');
    $('#email-error').text('Please enter a valid email');
  }
});
```

---

### Event Chaining Example

```javascript
$('#username')
  .focus(function() {
    $(this).addClass('highlight');
  })
  .blur(function() {
    $(this).removeClass('highlight');
    validateField(this);
  });
```

**Key Differences**:
| Event   | Trigger Condition          | Common Uses                  |
|---------|---------------------------|-----------------------------|
| submit  | Form submission            | Validation, AJAX submission |
| focus   | Element receives focus     | UI feedback, auto-actions   |
| blur    | Element loses focus        | Validation, cleanup         |

# Event Delegation

## Description
Event delegation is a technique that binds an event to a parent element to handle events for its child elements. This is particularly useful for dynamically added elements, as it avoids the need to attach event handlers to each individual child element.

## JavaScript Example
```javascript
$('#parent').on('click', '.child', function() {
  alert('Child clicked via delegation');
});

---

## 🛠 DOM Manipulation with jQuery

DOM (Document Object Model) manipulation means changing, adding, or removing HTML elements and content dynamically using jQuery.

### 🔹 Common Operations

* **Adding/removing elements**: `.append()`, `.remove()`
* **HTML/Text manipulation**: `.html()`, `.text()`
* **Class and CSS manipulation**: `.addClass()`, `.css()`

**Example:**

```js
$('#newElement').append('<p>New paragraph!</p>');
```

---

### ➕ Add / ➖ Remove Elements

#### `.append()`

* **Description**: Adds content inside the selected element, at the end.
* **Use Case**: Add new items to a list, messages to a chat box, etc.

#### `.remove()`

* **Description**: Removes the selected element(s) from the DOM.
* **Use Case**: Delete old or unnecessary elements dynamically.

```js
$('#list').append('<li>New item</li>');
$('#item').remove();
```

---

### 📝 Text / HTML Manipulation

```js
$('#div').html('<b>Bold</b>');     // Inserts HTML content
$('#div').text('Plain text');      // Inserts plain text only
```

---

### 🎨 CSS and Class Manipulation

#### `.addClass()`

* **Description**: Adds one or more CSS classes to selected elements.
* **Use Case**: Apply predefined styles via class (e.g., animations, themes).

#### `.css()`

* **Description**: Gets or sets inline CSS styles.
* **Use Case**: Dynamically change element styles without modifying CSS files.

```js
$('#div').addClass('highlight');
$('#div').css('color', 'blue');
```

---

## 🎞 Effects and Animations

### Basic Effects - `hide()`, `show()`, `toggle()`

#### `hide()`

* **Description**: Hides the selected element(s).

```js
$('#box').hide();
```

#### `show()`

* **Description**: Shows the selected element(s).

```js
$('#box').show();
```

#### `toggle()`

* **Description**: Toggles between showing and hiding an element.

```js
$('#box').toggle();
```

---

### ✨ Fade Effects - `fadeIn()`, `fadeOut()`

#### `fadeIn()`

* **Description**: Gradually makes a hidden element visible with a fade effect.

```js
$('#box').fadeIn();
```

#### `fadeOut()`

* **Description**: Fades out and hides the selected element.

```js
$('#box').fadeOut();
```

---

### 📉 Slide Effects - `slideUp()`, `slideDown()`

#### `slideUp()`

* **Description**: Slides the element up and hides it.

```js
$('#box').slideUp();
```

#### `slideDown()`

* **Description**: Slides the element down and shows it.

```js
$('#box').slideDown();
```

---

### 🧩 Custom Animations - `.animate()`

#### `animate()`

* **Description**: Allows you to create custom animations by changing multiple CSS properties over time.

```js
$('#box').animate({ left: '250px', opacity: 0.5 }, 1000);
```

---

## 🔁 Method Chaining & Callbacks

### 🔗 Chaining

jQuery allows you to perform multiple actions on the same element in a single line, by chaining methods together.

* This improves readability and reduces repetitive code.

**Example:**

```js
$('#box').fadeOut().fadeIn().slideUp();
```

### ⏱ Callbacks

A callback is a function that is executed after the previous function completes.

* Especially useful for animations where you want to trigger something after the effect finishes.

**Syntax:**

```js
$(selector).fadeOut(speed, callback);
```

**Example:**

```js
$('#box').fadeOut(500, function() {
  alert('Faded out');
});
```

---

## 🌐 AJAX with jQuery

### 🔹 Basic Methods

#### `.load()`

* **Description**: Loads data from the server and inserts it into the selected element.
* **Use Case**: Load HTML snippets or partial pages into a div.

```js
$('#content').load('data.html');
```

#### `.get()`

* **Description**: Sends an HTTP GET request and fetches data.
* **Use Case**: Retrieve data from a server (e.g., JSON, HTML).

```js
$.get('data.json', function(data) {
  console.log(data);
});
```

#### `.post()`

* **Description**: Sends an HTTP POST request to submit data.
* **Use Case**: Send form or user data to a server.

```js
$.post('submit.php', { name: 'John' }, function(response) {
  console.log(response);
});
```

### ⚙️ Advanced Method - `$.ajax()`

* **Description**: Fully customizable AJAX request method.
* **Use Case**: Perform complex requests with settings like type, data, success/error handlers, headers, etc.

```js
$.ajax({
  url: 'data.json',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.error('Error:', err);
  }
});
```

---

## 🧩 jQuery UI Components

### Examples

```js
$('#box').draggable();
$('#element').droppable();
$('#menu').accordion();
$('#tabs').tabs();
$('#date').datepicker();
```

---

## ✅ Form Validation with jQuery

### jQuery Validation Plugin

```html
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
```

### Example

```js
$('#myForm').validate({
  rules: {
    name: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Please enter your name",
    email: "Please enter a valid email address"
  }
});
```

---

## 📌 Summary

* jQuery simplifies JavaScript tasks
* Great for DOM, events, animations, and AJAX
* Easy to use, cross-browser friendly

---
