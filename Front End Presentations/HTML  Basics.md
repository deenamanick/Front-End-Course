# 📘 HTML Basics

Welcome to the **HTML Basics** guide — a beginner-friendly walkthrough of the foundational concepts in HTML with simple definitions and code examples.

---

## 🔖 What is HTML?

HTML stands for **HyperText Markup Language**. It is the standard language used to create web pages and web applications. It uses **elements (tags)** to define the structure and content of a web page.

```html
<!DOCTYPE html> <!-- Defines document as HTML5 -->
<html> <!-- Root element -->
<head> <!-- Metadata -->
  <title>Title</title>
</head>
<body> <!-- Page content -->
  <p>Hello World</p>
</body>
</html>
```

---

## 📌 Topics Covered

### 🔹 HTML Tags

HTML tags are keywords surrounded by angle brackets that define elements. Tags usually come in pairs.

```html
<p>This is a paragraph</p>
<h1>This is a heading</h1>
```

### 🔹 Attributes

Attributes provide additional information about HTML elements and are placed in the start tag.

```html
<p style="color:blue">Blue text</p>
<h1 title="Tooltip">Hover me</h1>
```

### 🔹 Anchor Tag

Creates a hyperlink to another webpage or location.

```html
<a href="https://example.com">Visit Example</a>
```

### 🔹 Image Tag

Displays an image using the `src` attribute for path and `alt` for description.

```html
<img src="pic.jpg" alt="Sample Image" width="300" height="200">
```

### 🔹 Lists

Organizes content in various formats:

* `<ul>` = Unordered List
* `<ol>` = Ordered List
* `<dl>` = Definition List

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
<dl>
  <dt>Coffee</dt>
  <dd>A hot drink</dd>
</dl>
```

### 🔹 Block vs Inline Elements

Block elements take full width (start on a new line), inline elements don't.

```html
<div>Block</div>
<span>Inline</span>
```

### 🔹 Formatting Tags

Used to style and format text content.

```html
<b>Bold</b> <i>Italic</i> <u>Underline</u>
```

### 🔹 Headings

Used to create headings of different importance (`<h1>` to `<h6>`).

```html
<h1>Main</h1>
<h2>Sub</h2>
<h3>Sub-sub</h3>
```

### 🔹 Paragraph, Line Break, and HR

* `<p>` defines a paragraph
* `<br>` inserts a line break
* `<hr>` inserts a horizontal line

```html
<p>This is a paragraph.</p>
<p>Line1<br>Line2</p>
<hr>
```

### 🔹 Meta Tags

Define metadata such as character set and viewport settings.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 🔹 HTML Comments

Used to insert notes or explanations.

```html
<!-- This is a comment -->
```

### 🔹 HTML Entities

Used to display reserved characters like `<`, `>` and `&`.

```html
<p>5 &lt; 10 &amp; 20 &gt; 15</p>
```

### 🔹 Iframe Tag

Embeds another webpage or resource within the current page.

```html
<iframe src="https://example.com" width="300" height="200"></iframe>
```

### 🔹 Audio and Video

Embeds media content in the page.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```

### 🔹 Tables

Displays tabular data using rows (`<tr>`) and cells (`<td>` and `<th>`).

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
```

### 🔹 Forms and Input Types

Collects user data. Various `type` attributes define input behavior.

```html
<form>
  <input type="text" name="name">
  <input type="submit">
</form>
<input type="password">
<input type="email">
```

### 🔹 Radio Buttons & Checkboxes

Used for single or multiple selections.

```html
<input type="radio" name="gender" value="male"> Male
<input type="checkbox" value="bike"> Bike
<input type="checkbox" value="car"> Car
```

### 🔹 Submit Button

Sends form data to the server or script.

```html
<input type="submit" value="Submit">
```

### 🔹 Fieldset and Legend

Groups related inputs with a label.

```html
<fieldset>
  <legend>Info</legend>
  <input type="text">
</fieldset>
```

### 🔹 HTML Nesting

Placing elements inside one another.

```html
<p>This is <b>bold and <i>italic</i></b></p>
```

### 🔹 Classes

Used for styling and scripting multiple elements.

```html
<tag class="className">Content</tag>
```

Example:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p class="highlight">This paragraph is highlighted.</p>
  <p>This paragraph is normal.</p>
</body>
</html>
```

### 🔹 Semantic Tags

These tags give meaning to your HTML structure and are better for SEO and accessibility.

| Tag            | Description                          |
| -------------- | ------------------------------------ |
| `<header>`     | Header of a section/page             |
| `<nav>`        | Navigation links                     |
| `<main>`       | Main content area                    |
| `<section>`    | Section of related content           |
| `<article>`    | Independent content (e.g. blog post) |
| `<aside>`      | Sidebar or extra info                |
| `<footer>`     | Footer of a section/page             |
| `<figure>`     | Groups media with a caption          |
| `<figcaption>` | Caption for `<figure>`               |
| `<mark>`       | Highlights text                      |
| `<time>`       | Represents a time/date               |
| `<address>`    | Contact or address info              |

Example:

```html
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>My Site</h1>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
  <main>
    <article>
      <h2>Welcome</h2>
      <p>This is a semantic HTML page.</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2025</p>
  </footer>
</body>
</html>
```

---

## 📚 Summary

* HTML defines the **structure** of web pages
* Uses tags like `<p>`, `<a>`, `<img>`, `<form>`, etc.
* Semantic tags improve **accessibility** and **SEO**
* HTML is enhanced by **CSS** and **JavaScript**

---

## ✅ Best Practices

* Use semantic tags
* Always use `alt` with images
* Indent code for readability
* Use comments to explain code
* Validate HTML using [W3C Validator](https://validator.w3.org/)

---

## 🚀 Getting Started

1. Create a file named `index.html`
2. Copy and paste sample code
3. Open the file in a web browser

---

## 📎 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙌 Contributing

You can contribute by:

* Adding new HTML examples
* Improving explanations
* Creating practice exercises

---

