
# 🧠 Quiz App – HTML/CSS/JS

This simple Quiz App allows users to answer multiple-choice questions and see their final score. It uses **HTML** for structure, **CSS** for styling, and **JavaScript** for logic.

---

## 🔧 Code Explanation (Step by Step)

---

### `<!DOCTYPE html>`

Declares the document as an HTML5 document.

---

### `<html lang="en">`

Starts the HTML document with English language settings.

---

### `<head>`

Contains metadata, title, and CSS styles.

---

#### ✅ `<meta charset="UTF-8" />`

Ensures the page correctly displays characters (UTF-8 encoding).

---

#### ✅ `<title>Quiz App</title>`

Sets the browser tab title to **"Quiz App"**.

---

### `<style>...</style>`

All the styles are included in the head for:

- Layout
- Colors
- Fonts
- Button styling
- Container and score display

---

#### 🖌️ CSS Styling Summary:

- `body`: Centered layout with background.
- `#quizContainer`: White card with rounded corners and shadow.
- `button`: Styled blue with hover effects.
- `#score`: Bold green score, positioned absolutely.

---

### `<body>`

Holds the main HTML content.

---

#### ✅ `<div id="quizContainer">`

Main container where the questions and answers are displayed dynamically.

---

#### ✅ `<p id="score"></p>`

Empty initially. It is filled with the final score once the quiz ends.

---

## 🎯 JavaScript Functionality

```js
const questions = [...];
```

An array of **question objects**, each with:
- `question`: The text of the question.
- `options`: Array of answer choices.
- `answer`: The correct answer string.

---

### `let current = 0;`

Tracks the current question index.

---

### `let score = 0;`

Keeps the score count.

---

### DOM References

```js
const container = document.getElementById('quizContainer');
const scoreBox = document.getElementById('score');
```

Used to dynamically inject content into the DOM.

---

### `function loadQuestion()`

This function:
1. Gets the current question object.
2. Injects the question into `container`.
3. Loops through each `option` and:
   - Creates a button.
   - Sets button text.
   - Adds a click event:
     - If correct, increases score.
     - Increments question index.
     - Loads next question or shows final score.

---

### `loadQuestion();`

Initial call to load the first question when the page loads.

---

## ⚙️ Algorithm (Step-by-Step)

1. **Initialize** score to 0 and question index to 0.
2. **Load the first question** on page load.
3. For each question:
   - Display question text and options.
   - On option click:
     - Check if the selected option is correct.
     - Increase score if correct.
     - Move to next question.
4. After the last question:
   - Clear the quiz container.
   - Display the final score.

---

## 📋 Sample Output

```
🧠 Quiz App

What is the capital of France?
[Paris]
[London]
[Berlin]

-> Click correct option...

After 3 questions:
🎉 Your Score: 2 / 3
```

---

## ✅ Features

- Dynamic question and option loading.
- Simple user interaction.
- Real-time score tracking.
- Final result display.

---

## 💡 Possible Enhancements

- Add timer for each question.
- Randomize questions.
- Store high scores using localStorage.
- Provide correct answer feedback.
- Show a restart button after quiz ends.