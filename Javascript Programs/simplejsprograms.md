# 🚀 JavaScript Mini Projects – HTML/CSS/JS

This single HTML file demonstrates **10 mini JavaScript projects**, showcasing interactive UI components and functionality without any external libraries.

---

## 📦 Projects Included

1. **Number Guessing Game**
2. **Digital Clock**
3. **To-Do List**
4. **Calculator**
5. **Dice Roll**
6. **Form Validator**
7. **Random Color Generator**
8. **Countdown Timer**
9. **Music Player UI (Dummy)**
10. **Flashcard Quiz**

---

## 🧱 HTML Structure Overview

Each project is wrapped in a `<section>` for layout and separation. UI components include `<input>`, `<button>`, and `<p>` tags, styled consistently.

---

## 🎨 CSS Design Highlights

* Responsive layout with centered sections.
* Card-style UI with shadows and padding.
* Buttons and inputs styled uniformly.
* Grid layout used for calculator keys.

---

## 🧠 JavaScript Breakdown

### 1. Number Guessing Game

```js
const secret = Math.floor(Math.random() * 100 + 1);
function checkGuess() {
  const guess = +document.getElementById('guessInput').value;
  const result = guess === secret ? '🎉 Correct!' : guess > secret ? 'Too high ⬆️' : 'Too low ⬇️';
  document.getElementById('guessResult').textContent = result;
}
```

---

### 2. Digital Clock

```js
setInterval(() => {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);
```

---

### 3. To-Do List

```js
function addTodo() {
  const val = document.getElementById('todoInput').value.trim();
  if (!val) return;
  const li = document.createElement('li');
  li.textContent = val;
  li.onclick = () => li.remove();
  document.getElementById('todoList').appendChild(li);
  document.getElementById('todoInput').value = '';
}
```

---

### 4. Calculator

```js
let calcExp = '';
function calc(val) {
  const display = document.getElementById('calcDisplay');
  if (val === 'C') {
    calcExp = '';
  } else if (val === '⌫') {
    calcExp = calcExp.slice(0, -1);
  } else if (val === '=') {
    try {
      calcExp = eval(calcExp.replace(/%/g, '/100')).toString();
    } catch {
      calcExp = 'Error';
    }
  } else {
    calcExp += val;
  }
  display.value = calcExp;
}
```

---

### 5. Dice Roll

```js
function rollDice() {
  const roll = Math.floor(Math.random() * 6 + 1);
  document.getElementById('diceResult').textContent = `🎲 You rolled a ${roll}`;
}
```

---

### 6. Form Validator

```js
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const isValid = name.length > 0 && email.includes('@') && email.includes('.');
  document.getElementById('formMessage').textContent = isValid ? '✅ Valid input' : '❌ Invalid input';
}
```

---

### 7. Random Color Generator

```js
function generateColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.getElementById('colorDisplay').textContent = color;
  document.body.style.backgroundColor = color;
}
```

---

### 8. Countdown Timer

```js
let timer;
function startCountdown() {
  let time = +document.getElementById('countdownInput').value;
  clearInterval(timer);
  timer = setInterval(() => {
    if (time > 0) {
      document.getElementById('countdown').textContent = `${time--} seconds remaining...`;
    } else {
      document.getElementById('countdown').textContent = '⏰ Time Up!';
      clearInterval(timer);
    }
  }, 1000);
}
```

---

### 9. Music Player UI (Dummy)

```js
let playing = false;
function toggleMusic() {
  playing = !playing;
  document.getElementById('musicStatus').textContent = playing ? '🎵 Playing...' : '⏸️ Paused';
  document.getElementById('musicBtn').textContent = playing ? 'Pause' : 'Play';
}
```

---

### 10. Flashcard Quiz

```js
const questions = [
  "💡 What is JavaScript?",
  "🔁 What is a loop?",
  "🧠 What is a variable?",
  "⚙️ What is a function?",
  "🌐 What is the DOM?"
];
let qIndex = 0;
function nextQuestion() {
  document.getElementById('quizQuestion').textContent = questions[qIndex++ % questions.length];
}
nextQuestion();
```

---

## ✅ Features

* Interactive browser-based mini projects.
* All in one file: HTML, CSS, and JavaScript.
* Clean, responsive design.
* Real-time UI feedback and event handling.

---

## 💡 Suggestions for Expansion

* Use localStorage to persist data in To-Do list and Calculator history.
* Add sound to the Dice roll and Music player.
* Enhance form validation with regex.
* Improve the quiz with answers and score tracking.
