# 🎨 CSS Basics

Welcome to the **CSS Basics** guide — a complete walkthrough of foundational CSS concepts, syntax, examples, and output formats.

---

## 📘 What is CSS?

**CSS (Cascading Style Sheets)** is a stylesheet language used to control the presentation (layout, colors, fonts) of content written in HTML. It enhances the visual appeal and user experience of a website.

### 💡 Key Benefits:

* Separation of content and style
* Consistent design across pages
* Easier site maintenance
* Control over responsive layouts and animations

---

## 📌 Ways to Apply CSS

### 🔹 Inline CSS

Defined within an HTML tag using the `style` attribute.

```html
<h3 style="color: red; text-align: center;">Hello Inline</h3>
```

🔸 **Output**: "Hello Inline" appears centered and red.

### 🔹 Internal CSS

Defined within a `<style>` block in the HTML `<head>`.

```html
<head>
  <style>
    h1 { color: green; text-align: center; }
  </style>
</head>
<body>
  <h1>Hello Internal</h1>
</body>
```

🔸 **Output**: Green centered heading.

### 🔹 External CSS

Defined in an external `.css` file and linked with `<link>`.

```html
<link rel="stylesheet" href="style.css">
```

`style.css`:

```css
h2 { color: blue; }
```

🔸 **Output**: `<h2>Hello External</h2>` appears in blue.

---

## 🔧 CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: red;
  font-size: 24px;
}
```

---

## 🏷️ Selectors

* Element: `p {}`
* Class: `.className {}`
* ID: `#idName {}`
* Attribute: `input[type="text"] {}`

---

## 🎨 Common CSS Properties

```css
p {
  background-color: yellow;
  font-size: 20px;
  margin: 10px;
}
```

🔸 **Output**: Paragraph with yellow background, 20px font, and margin.

---

## 🧩 Classes and IDs

### 🔹 Classes

```css
.fruit { color: orange; }
```

```html
<h2 class="fruit">Apple</h2>
```

🔸 **Output**: Orange text.

### 🔹 IDs

```css
#unique { background-color: gray; }
```

```html
<div id="unique">Box</div>
```

🔸 **Output**: Gray background box.

### 🔹 Multiple Classes

```css
.fruit { color: red; }
.center { text-align: center; }
```

```html
<h2 class="fruit center">Mango</h2>
```

🔸 **Output**: Red centered text.

---

## 📥 Forms and Select Boxes

### 🔹 List Box

```html
<select name="cars" size="4">
  <option>BMW</option>
  <option>Audi</option>
</select>
```

🔸 **Output**: Scrollable box with options.

---

## 🧠 CSS + JavaScript

JavaScript can dynamically modify CSS styles:

```js
document.getElementById('demo').style.color = 'blue';
```

🔸 **Output**: Changes the color to blue.

---

## 💅 Text & Font Styling

```css
p {
  font-size: 18px;
  color: green;
  text-align: center;
}
```

---

## 🔗 Styling Links

```css
a:hover {
  color: red;
}
```

🔸 **Output**: Link turns red on hover.

---

## 📋 Styling Lists

```css
ul {
  list-style-type: square;
  padding-left: 20px;
}
```

---

## 🧾 Styling Tables

```css
table, th, td {
  border: 1px solid black;
}
```

---

## 🖼️ Box Model

### 🔹 Border

```css
div { border: 2px solid black; }
```

### 🔹 Margin

```css
div { margin: 20px; }
```

### 🔹 Padding

```css
div { padding: 20px; }
```

### 🔹 Dimensions

```css
div { width: 300px; height: 150px; }
```

---

## 🧱 Display & Positioning

### 🔹 Display

```css
div { display: flex; }
```

### 🔹 Positioning

```css
div { position: fixed; top: 0; right: 0; }
```

### 🔹 Float

```css
div { float: left; }
```

---

## 🔂 Advanced Layouts

### 🔹 Flexbox

```css
div { display: flex; justify-content: center; }
```

### 🔹 Grid

```css
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

## 🔁 Special Selectors

### 🔹 nth-child

```css
li:nth-child(odd) {
  background: lightblue;
}
```

### 🔹 Pseudo-classes

```css
a:hover { color: red; }
```

### 🔹 Pseudo-elements

```css
p::first-letter {
  font-size: 200%;
}
```

---

## ✨ Animations

### 🔹 Transforms

```css
div:hover {
  transform: rotate(45deg);
}
```

### 🔹 Transitions

```css
div {
  transition: background-color 0.5s ease;
}
```

---

## 📱 Media Queries

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

---

## ✅ Summary

* CSS controls appearance
* Applied via inline, internal, external methods
* Use selectors for targeted styling
* Leverage Flexbox & Grid for layout
* Animate with transitions and transforms
* Make it responsive with media queries

---

