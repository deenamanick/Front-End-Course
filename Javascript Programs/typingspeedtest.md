
# ⌨️ Typing Speed Test – HTML/CSS/JS

This Typing Speed Test allows users to measure their typing speed based on a predefined quote. It uses **HTML** for structure, **CSS** for styling, and **JavaScript** for functionality.

---

## 🔧 Code Breakdown

### `<!DOCTYPE html>` and `<html lang="en">`

Defines the document type and sets the language to English.

---

## 🧱 HTML Structure

### `<head>`

- `<meta charset="UTF-8">` — Ensures proper character encoding.
- `<title>` — Sets the page title.
- `<style>` — Contains all the CSS styles.

### `<body>`

- `<h2>` — Displays the heading.
- `<div class="quote" id="quote">` — Displays the sample text to type.
- `<textarea id="input">` — Where the user types the quote.
- `<p id="result">` — Displays the result (time & WPM).
- `<button>` — Resets the test.

---

## 🎨 CSS Styling

- Simple layout with padding and rounded input areas.
- `.quote` is highlighted with a light gray background.
- `.reset-btn` styles the reset button.

---

## 🧠 JavaScript Logic

### Variables

```js
const quote = document.getElementById('quote').textContent;
const input = document.getElementById('input');
const result = document.getElementById('result');
let startTime;
let hasStarted = false;
```

- References the quote, input field, and result area.
- Tracks whether typing has started and the start time.

---

### `normalize(text)`

```js
function normalize(text) {
  return text.trim().replace(/\s+/g, ' ');
}
```

- Cleans up the text for accurate comparison.

---

### `input.addEventListener('input', ...)`

- Starts timing when the user types the first character.
- Checks if the typed input matches the quote.
- If matched:
  - Calculates the time taken.
  - Computes Words Per Minute (WPM).
  - Displays the result.
  - Disables the textarea.

---

### `resetTest()`

Resets the state:
- Clears textarea and result text.
- Re-enables input.
- Resets timers.

---

## ⚙️ Algorithm Steps

1. Wait for user input.
2. On first keystroke, start the timer.
3. Continue monitoring input.
4. Once the input matches the quote:
   - Stop the timer.
   - Calculate duration in seconds.
   - Count the words in the quote.
   - Compute WPM: `(words / time) * 60`
   - Display result and disable typing.
5. Reset button allows restarting the test.

---

## ✅ Features

- Real-time typing monitoring.
- Measures and displays typing speed.
- Clean, minimal user interface.
- Reset functionality to repeat the test.

---

## 💡 Enhancements

- Add random quotes.
- Track accuracy (percentage of correct characters).
- Include a countdown timer.
- Save high scores using localStorage.
- Display a progress bar for the quote.
