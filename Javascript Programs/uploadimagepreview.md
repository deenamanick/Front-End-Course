
# 🖼️ Image Preview App – HTML/CSS/JS

This simple web app allows users to upload an image and instantly preview it in the browser. It uses **HTML** for layout, **CSS** for design, and **JavaScript** for logic.

---

## 🔧 Code Explanation

### `<!DOCTYPE html>` and `<html lang="en">`

Defines the document as an HTML5 page and sets the language to English.

---

## 🧱 HTML Structure

```html
<div class="container">
  <h2>🖼️ Upload and Preview Image</h2>
  <input type="file" id="fileInput" accept="image/*" />
  <img id="preview" alt="Image preview" />
</div>
```

- `h2` – Title of the app.
- `input[type="file"]` – File picker for image files.
- `img#preview` – Initially hidden; displays the uploaded image once selected.

---

## 🎨 CSS Styling Overview

- **Layout**: Uses Flexbox to center the content both vertically and horizontally.
- **Container**: White card with padding, shadow, and rounded corners.
- **File Input**: Styled with border, padding, hover effect.
- **Image**: Rounded corners, soft shadow, and object-fit cover for better preview scaling.

---

## 🧠 JavaScript Logic

### Get DOM Elements

```js
const input = document.getElementById('fileInput');
const preview = document.getElementById('preview');
```

---

### Event Listener for File Input

```js
input.addEventListener('change', () => {
  const file = input.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
    preview.style.display = 'none';
    alert('Please select a valid image file.');
  }
});
```

- Checks if a file is selected and whether it's an image.
- If valid:
  - Uses `FileReader` to read it as a data URL.
  - Sets the preview image `src` and displays it.
- If invalid:
  - Hides the image and shows an alert.

---

## ⚙️ Algorithm Summary

1. Wait for file selection (`change` event).
2. Check if the file is an image.
3. If yes:
   - Read file using `FileReader`.
   - Set `img.src` to the result.
   - Show the image.
4. If not:
   - Clear preview.
   - Display an alert message.

---

## ✅ Features

- Instant image preview.
- Accepts all image formats (`jpg`, `png`, `gif`, etc.).
- Simple and elegant layout.

---

## 💡 Possible Enhancements

- Add drag-and-drop image support.
- Show file name and size.
- Limit file size uploads.
- Add image validation or cropping.