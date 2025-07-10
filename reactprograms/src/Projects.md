# 🧠 React Mini Projects - Explained

This README walks through 10 simple React mini-projects designed to strengthen your foundational knowledge of **React hooks**, **state management**, and **component-based architecture**.

---

## 🚀 Projects Covered

1. [Counter App](#1-counter-app)
2. [Todo List](#2-todo-list)
3. [Calculator](#3-calculator)
4. [Color Picker](#4-color-picker)
5. [Digital Clock](#5-digital-clock)
6. [Quote Generator](#6-quote-generator)
7. [Hide/Show Toggle](#7-hideshow-toggle)
8. [Form Validation](#8-form-validation)
9. [Image Gallery](#9-image-gallery)
10. [Recipe App](#10-recipe-app)
11. [Expense Tracker](#11-expense-tracker)
12. [Accordion](#12-accordion)
13. [Tabs UI](#13-tabs-ui)
14. [Star Rating](#14-star-rating)
15. [Product Card with Modal](#15-product-card-with-modal)
16. [Search Filter App](#16-search-filter-app)
17. [Stopwatch](#17-stopwatch)
18. [Multi-step Form](#18-multi-step-form)
19. [Movie Browser](#19-movie-browser)

---

## 🔧 Common Setup

All components use:

```js
import React, { useState, useEffect } from 'react';
```

* `useState`: Manages component state (e.g. numbers, lists, strings).
* `useEffect`: Handles side effects (like timers).

A reusable `Card` component wraps each app with consistent styling.

```jsx
const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);
```

---

## 1️⃣ Counter App

### 🔍 Step-by-Step Explanation

```jsx
const [count, setCount] = useState(0);
```

* Initializes a `count` state variable with 0.
* `setCount` is used to update the counter.

```jsx
<button onClick={() => setCount(count + 1)}>+</button>
```

* Increments the counter by 1.

```jsx
<button onClick={() => setCount(count - 1)}>-</button>
```

* Decrements the counter by 1.

```jsx
<button onClick={() => setCount(0)}>Reset</button>
```

* Resets the counter to 0.

### ✨ Purpose

* Practice state updates
* Understand re-rendering

---

## 2️⃣ Todo List

### 🔍 Step-by-Step Explanation

```jsx
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);
```

* `task`: Tracks current input value.
* `tasks`: Stores all tasks as an array.

```jsx
const addTask = () => {
  if (task.trim()) {
    setTasks([...tasks, { text: task, done: false }]);
    setTask('');
  }
};
```

* Adds a new task object to the `tasks` array.

```jsx
const toggleTask = index => {
  const updated = [...tasks];
  updated[index].done = !updated[index].done;
  setTasks(updated);
};
```

* Toggles the `done` status of a task.

```jsx
const removeTask = index => {
  setTasks(tasks.filter((_, i) => i !== index));
};
```

* Removes the task at the given index.

### ✨ Purpose

* Manage list state
* Handle input fields and user actions
* Update specific array elements

---

## 3️⃣ Calculator

### 🔍 Step-by-Step Explanation

```jsx
const [a, setA] = useState(0);
const [b, setB] = useState(0);
const [result, setResult] = useState(null);
```

* `a`, `b`: Inputs for the calculator.
* `result`: Stores output.

```jsx
<button onClick={() => setResult(a + b)}>+</button>
```

* Adds `a` and `b`, sets the result.

```jsx
<button onClick={() => setResult(a - b)}>-</button>
```

* Subtracts `b` from `a`.

```jsx
<button onClick={() => setResult(a * b)}>*</button>
```

* Multiplies `a` and `b`.

```jsx
<button onClick={() => setResult(b !== 0 ? a / b : 'Err')}>/</button>
```

* Divides `a` by `b`, handles divide-by-zero.

### ✨ Purpose

* Understand input bindings
* Arithmetic operations with state

---

## 4️⃣ Color Picker

### 🔍 Step-by-Step Explanation

```jsx
const [color, setColor] = useState('#ffffff');
```

* Manages color state.

```jsx
<input type="color" value={color} onChange={e => setColor(e.target.value)} />
```

* Lets user choose a color.
* Updates state on color pick.

```jsx
<Card style={{ backgroundColor: color }}>
```

* Changes background of the card to the selected color.

### ✨ Purpose

* Use HTML5 input types
* Bind style to state

---

## 5️⃣ Digital Clock

### 🔍 Step-by-Step Explanation

```jsx
const [time, setTime] = useState(new Date());
```

* Initializes state with current time.

```jsx
useEffect(() => {
  const interval = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(interval);
}, []);
```

* Sets up interval to update time every second.
* Cleans up the interval when the component unmounts.

### ✨ Purpose

* Learn side effects
* Update UI periodically

---

## 6️⃣ Quote Generator

### 🔍 Step-by-Step Explanation

```jsx
const [quote, setQuote] = useState('');
```

* State to store the selected quote.

```jsx
const random = quotes[Math.floor(Math.random() * quotes.length)];
```

* Chooses a random quote from the array.

```jsx
<button onClick={getQuote}>New Quote</button>
```

* Triggers quote generation on button click.

### ✨ Purpose

* Random selection from array
* Button-based state updates

---

## 7️⃣ Hide/Show Toggle

### 🔍 Step-by-Step Explanation

```jsx
const [visible, setVisible] = useState(true);
```

* `visible` determines visibility of text.

```jsx
<button onClick={() => setVisible(!visible)}>Toggle</button>
```

* Toggles the `visible` state.

```jsx
{visible && <p>...</p>}
```

* Conditionally renders the paragraph.

### ✨ Purpose

* Conditional rendering
* Simple boolean toggle logic

---

## 8️⃣ Form Validation

### 🔍 Step-by-Step Explanation

```jsx
const [name, setName] = useState('');
const [error, setError] = useState('');
```

* `name`: Tracks form input.
* `error`: Stores error message.

```jsx
e.preventDefault();
```

* Prevents form reload.

```jsx
if (name.trim() === '') setError('Name is required');
```

* Validates that name is not empty.

```jsx
alert(`Hello, ${name}!`);
```

* Shows greeting if name is valid.

### ✨ Purpose

* Form submission handling
* Basic validation with feedback

---

## 9️⃣ Image Gallery

### 🔍 Step-by-Step Explanation

```jsx
const [selected, setSelected] = useState(null);
```

* Tracks currently selected image.

```jsx
<img onClick={() => setSelected(src)} />
```

* Opens image in modal.

```jsx
{selected && <div onClick={() => setSelected(null)}>...</div>}
```

* Renders modal when image is selected.
* Clicking closes the modal.

### ✨ Purpose

* Work with arrays of media
* Modal interactions
* Conditional rendering with UI feedback

---

## 🍽️ 10. Recipe App

### 🔍 Step-by-Step Explanation

```jsx
const recipes = [...];
const [selected, setSelected] = useState(null);
```

* Lists all recipes.
* `selected` holds currently opened recipe.

```jsx
<li onClick={() => setSelected(r)}>{r.name}</li>
```

* Clicking a recipe displays its details.

```jsx
{selected && (
  <div>
    <p>Ingredients: ...</p>
    <p>Steps: ...</p>
  </div>
)}
```

* Shows ingredients and steps if a recipe is selected.

### ✨ Purpose

* Nested data rendering
* List/detail UI interaction

---

## 11. Expense Tracker

### 🔍 Step-by-Step Explanation

```jsx
const [transactions, setTransactions] = useState([]);
const [text, setText] = useState('');
const [amount, setAmount] = useState('');
```

* Initializes empty transaction list and inputs for description and amount.

```jsx
const addTransaction = () => {
  if (!text || !amount) return;
  setTransactions([...transactions, { text, amount: parseFloat(amount) }]);
  setText('');
  setAmount('');
};
```

* Adds a transaction if both fields are filled. Parses amount to float.

```jsx
const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
```

* Calculates the total balance from all transactions.

### ✨ Purpose

* Learn form inputs and validation
* Use `reduce()` for calculations
* Manage dynamic lists

---

## 12. Accordion (FAQ Toggle)

### 🔍 Step-by-Step Explanation

```jsx
const [activeIndex, setActiveIndex] = useState(null);
```

* Tracks which FAQ is currently expanded.

```jsx
<h4 onClick={() => setActiveIndex(i === activeIndex ? null : i)}>
```

* Toggles visibility when clicking a question. Collapses if already open.

```jsx
{i === activeIndex && <p>{faq.answer}</p>}
```

* Shows the answer only if the question is currently selected.

### ✨ Purpose

* Master conditional rendering
* Handle toggling of dynamic items

---

## 13. Tabs UI

### 🔍 Step-by-Step Explanation

```jsx
const [active, setActive] = useState('Home');
```

* Tracks the active tab.

```jsx
<button onClick={() => setActive(tab)}>
```

* Changes the `active` tab when clicked.

```jsx
{active === 'Home' && <p>This is Home content</p>}
```

* Shows tab content based on current `active` tab.

### ✨ Purpose

* Learn how to build custom tabs
* Master state-driven UI switching

---

## 14. Star Rating

### 🔍 Step-by-Step Explanation

```jsx
const [rating, setRating] = useState(0);
```

* Stores the current rating.

```jsx
<span onClick={() => setRating(i)}>
```

* Clicking a star sets the rating value.

```jsx
className={i <= rating ? 'star selected' : 'star'}
```

* Applies different styles for filled vs empty stars.

### ✨ Purpose

* Practice rendering repeated UI (loops)
* Dynamic class handling
* User interaction with UI feedback

---

## 15. Product Card with Modal

### 🔍 Step-by-Step Explanation

```jsx
const [selected, setSelected] = useState(null);
```

* Stores which product is currently clicked.

```jsx
onClick={() => setSelected(p)}
```

* Opens the modal by setting selected product.

```jsx
{selected && (
  <div className="modal" onClick={() => setSelected(null)}>
```

* Displays a modal. Clicking outside or close button clears the state.

### ✨ Purpose

* Modal UI logic
* Working with object state
* Displaying item details interactively

---

## 16. Search Filter App

### 🔍 Step-by-Step Explanation

```jsx
const [query, setQuery] = useState('');
```

* Stores user’s input to filter the list.

```jsx
const filtered = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));
```

* Filters the array of items based on the query.

### ✨ Purpose

* Real-time filtering
* Search logic basics

---

## 17. Stopwatch

### 🔍 Step-by-Step Explanation

```jsx
const [time, setTime] = useState(0);
const [running, setRunning] = useState(false);
```

* Time and start/stop status.

```jsx
useEffect(() => {
  let interval;
  if (running) {
    interval = setInterval(() => setTime(t => t + 1), 1000);
  }
  return () => clearInterval(interval);
}, [running]);
```

* Uses an interval to increment time when running.

### ✨ Purpose

* Timer logic
* Side effects and cleanup

---

## 18. Multi-step Form

### 🔍 Step-by-Step Explanation

```jsx
const [step, setStep] = useState(1);
const [formData, setFormData] = useState({ name: '', email: '', age: '' });
```

* Tracks form progression and user input.

```jsx
const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
```

* Updates the respective input field.

### ✨ Purpose

* Form state management
* Multi-screen component logic

---

## 19. Movie Browser

### 🔍 Step-by-Step Explanation

```jsx
const [query, setQuery] = useState('');
```

* Search text state.

```jsx
const filtered = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
```

* Filter movie list by title.

### ✨ Purpose

* Case-insensitive filtering
* Basic search engine logic

---


## 📊 Summary

These mini-projects are great starting points to learn:

* `useState` and `useEffect`
* Conditional rendering
* Handling arrays and inputs in React
* Creating interactive, real-time apps
* Build functional search and filter UIs
* Master time-based state updates
* Use multi-step logic and modals

Feel free to expand them into full apps with localStorage, backend APIs, or advanced styling!

Keep building and explore combining features like validation + tabs or rating + modals to simulate real apps!
---

Happy Coding! 🚀
