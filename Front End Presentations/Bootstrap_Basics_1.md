# 📚 Bootstrap Presentation

## Complete Overview with Descriptions and Examples

---

## ✅ What is Bootstrap?

Bootstrap is a popular front-end framework used to build responsive, mobile-first websites. It includes HTML, CSS, and JavaScript components for layout, typography, forms, buttons, navigation, and other interface elements.

**Example:**

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
```

---

## 🔄 Difference Between Bootstrap 4 & 5

```txt
► Bootstrap 5 removes jQuery, drops support for Internet Explorer,
  adds RTL support, utility APIs, and improved grid system.
  It is more modern and modular than Bootstrap 4.
```

**Example:**

* **Bootstrap 4**: Uses jQuery, has Jumbotron, supports IE
* **Bootstrap 5**: No jQuery, Jumbotron removed, improved layout utilities

---

## 🚀 Bootstrap Intro

To use Bootstrap, include the CDN link to its CSS and JavaScript files in your HTML.

**Example:**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

```

```html

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Intro</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

  <p class="text-success">Bootstrap is ready to use!</p>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

```

---

## 📀 Bootstrap Grid System

Bootstrap uses a 12-column grid system to create responsive layouts using rows and columns.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid System</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-md-6 bg-primary text-white">Column 1</div>
      <div class="col-md-6 bg-secondary text-white">Column 2</div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 📝 Typography

Bootstrap offers classes for headings, paragraphs, and text formatting to improve readability and structure.

**Example:**

```html
<h1 class="display-1">Heading 1</h1>
<p class="text-muted">Muted text</p>
```

---

## 📊 Tables

Use Bootstrap's `.table` classes to create styled and responsive tables.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Table</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 🖼️ Images

Bootstrap provides image classes like `.img-fluid` for responsive images and `.rounded` for styling.

**Example:**

```html
<img src="image.jpg" class="img-fluid rounded" alt="Responsive Image">
```

---

## ❌ Jumbotron

Jumbotron is a flexible component for showcasing hero content (Deprecated in Bootstrap 5).

**Example:**

```html
<div class="jumbotron">
  <h1>Welcome!</h1>
  <p>This is a hero section.</p>
</div>
```

---

## 🔘 Buttons

Buttons can be styled using Bootstrap classes like `.btn`, `.btn-primary`, `.btn-success`, etc.

**Example:**

```html
<button class="btn btn-success">Click Me</button>
```

---

## 🎯 Glyphicons

Glyphicons were supported in Bootstrap 3. In later versions, use external libraries like Font Awesome.

**Example:**

```html
<i class="fa fa-home"></i>
```

---

## 📆 Pagination

Use `.pagination` class to create paginated navigation links.

**Example:**

```html
<ul class="pagination">
  <li class="page-item active">
    <a class="page-link" href="#">1</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">2</a>
  </li>
</ul>
```

---

## ⏪ Pager (Deprecated)

Pager component is deprecated. Use aligned pagination instead.

**Example:**

```html
<ul class="pagination justify-content-between">
  <li class="page-item">
    <a class="page-link" href="#">Previous</a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
```

---

## 📂 List Group

List groups display a series of content items with consistent styling.

**Example:**

```html
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
</ul>
```

---

## 🏋️ Dropdowns

Dropdown menus toggle a list of options using `.dropdown` and `.dropdown-menu` classes.

**Example:**

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Menu</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Option 1</a>
  </div>
</div>
```

---

## 📁 Collapse

The collapse component hides or shows content with a toggle.

**Example:**

```html
<button class="btn btn-info" data-toggle="collapse" data-target="#demo">Toggle</button>
<div id="demo" class="collapse">Hidden content here.</div>
```

---

## 🗺️ Navbar

The navbar is a responsive navigation header with branding, links, and toggle support.

**Example:**

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
</nav>
```

---

## 🚶️ Forms

Bootstrap styles form elements with classes like `.form-control` and `.form-group`.

**Example:**

```html
<form>
  <div class="form-group">
    <label>Email:</label>
    <input type="email" class="form-control">
  </div>
</form>
```

---

## 🎨 Carousel

Carousel component creates image sliders with indicators and controls.

**Example:**

```html
<div id="carouselExample" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img1.jpg">
    </div>
  </div>
</div>
```

---

## 🚪 Modal – Popup Window

Modals are pop-up dialogs for displaying content over the main page.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Modal</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-4">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Launch Modal
    </button>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal Header</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            This is a modal.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
