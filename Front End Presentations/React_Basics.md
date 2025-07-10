# ReactJS

Detailed topics with examples and explanations

## Introduction to React

### What is React?

* A JavaScript library developed by Facebook for building user interfaces.
* Allows developers to create large web applications that can update and render efficiently in response to data changes.
* Uses a component-based architecture.

### Key Features:

* Declarative views.
* Component-based structure.
* Learn once, write anywhere.

### Why React?

* Fast due to virtual DOM.
* Strong community and ecosystem.
* Easy to learn and integrate with other libraries or frameworks.

## JSX and Rendering

### What is JSX?

* JSX stands for JavaScript XML.
* It is a syntax extension for JavaScript recommended for use with React to describe UI structure.
* JSX looks similar to HTML, but has full power of JavaScript.

### Key Points:

* JSX expressions must have one parent element.
* Use `className` instead of `class`.
* JSX supports JavaScript expressions using `{}`.

```js
const element = <h1>Hello, world!</h1>;
```

```js
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
```

## 🚀 Getting Started with React – Installation & App Setup

### 🔧 Prerequisites

Before creating a React app, make sure the following are installed:

| Tool            | Purpose                                | Download Link                                                  |
| --------------- | -------------------------------------- | -------------------------------------------------------------- |
| **Node.js**     | JavaScript runtime environment         | [https://nodejs.org](https://nodejs.org)                       |
| **npm**         | Node Package Manager (comes with Node) | Installed with Node.js                                         |
| **Code Editor** | For writing code (e.g., VS Code)       | [https://code.visualstudio.com](https://code.visualstudio.com) |

Check versions:

```bash
node -v
npm -v
```

---

## ✅ Install Create React App

`create-react-app` is the officially supported way to create a single-page React application with a good default configuration.

### 🖥️ Using NPX (Recommended):

```bash
npx create-react-app my-app
```

* `npx`: Runs the package without globally installing it.
* `my-app`: Name of the folder/project.

*This command sets up everything: Webpack, Babel, ESLint, testing, service workers, etc.*

---

## 📂 Project Structure

After installation, the folder structure will look like this:

```
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

| Folder/File          | Purpose                              |
| -------------------- | ------------------------------------ |
| `/src`               | All your React components go here    |
| `/public/index.html` | Main HTML template                   |
| `App.js`             | Main component for rendering content |
| `index.js`           | Entry point to render React into DOM |
| `package.json`       | Project metadata and dependencies    |

---

## 🌎 Run the App

Navigate into your app folder:

```bash
cd my-app
```

Start the development server:

```bash
npm start
```

This will launch the app in your default browser at:

```
http://localhost:3000
```

Live-reload is enabled by default. Any changes you make will instantly reflect in the browser.

---

## 🔧 Build for Production

When you're ready to deploy your app, use the following command:

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

---

## 📅 Summary Table

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npx create-react-app` | Create a new React project               |
| `npm start`            | Run the development server               |
| `npm run build`        | Build the app for production             |
| `npm install`          | Install dependencies from `package.json` |

---


### Rendering with ReactDOM

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### React.Fragment and StrictMode

```js
<React.Fragment>
  <h1>Heading</h1>
  <p>Paragraph</p>
</React.Fragment>

<React.StrictMode>
  <App />
</React.StrictMode>
```

## Components

### What Are Components?

* Components are the building blocks of a React application.
* Let you split the UI into independent, reusable pieces.
* Each component is a JavaScript function or class that returns JSX.

### Types of Components

* Function Components
* Class Components (less common in modern React)

## Functional Component

### What is a Function Component?

* A plain JavaScript function that returns JSX.
* Receives `props` as arguments.
* Preferred way to write components in modern React.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Basic Syntax

```js
function Welcome() {
  return <h1>Hello from Functional Component!</h1>;
}

const Welcome = () => <h1>Hello from Functional Component!</h1>;
```

### Example

```js
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
export default Counter;
```

## Props and Default Props

### What Are Props?

* Used to pass data from parent to child components.

```js
function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}
<Welcome name="Alex" />
```

### Default Props

```js
function Greet(props) {
  return <h3>Hello, {props.name}</h3>;
}
Greet.defaultProps = {
  name: "Guest"
};
```

## Component Composition

```js
function Header() { return <h1>My App</h1>; }
function Footer() { return <p>Footer content</p>; }
function App() {
  return (
    <div>
      <Header />
      <p>Main content goes here.</p>
      <Footer />
    </div>
  );
}
```

## Reusabilty
Reusability : Function components can be reused by passing different props.

```js

► Example :
  function Button(props) {
  return <button style={{ color: props.color
  }}>{props.label}</button>;
  }
  // Usage
  <Button color="blue" label="Submit" />
  <Button color="green" label="Save" />


```

► Same Button component is reused with different data.

## Children Prop

```js
function Card(props) {
  return <div className="card">{props.children}</div>;
}

<Card>
  <h3>This is a Card</h3>
  <p>With some description inside.</p>
</Card>
```

## Class Component

### What is a Class Component?

* JavaScript ES6 class that extends React.Component.
* Contains a render() method returning JSX.
* Can manage state and lifecycle events.

```js
import React, { Component } from 'react';
class MyComponent extends Component {
  render() {
    return <h1>Hello from Class Component!</h1>;
  }
}
export default MyComponent;
```

### Example

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

## State and useState Hook

### What is State?

* A built-in object to store dynamic data in a component.
* When state changes, the component re-renders.

```js
const [count, setCount] = useState(0);
```

### useState Syntax

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

### useState Hook

In functional components, you manage state using the useState() hook.

```js
import React, { useState } from 'react';
 function Counter() {
 const [count, setCount] = useState(0); // state with default value 0
 return (
 <div>
 <h2>Count: {count}</h2>
 <button onClick={() => setCount(count + 1)}>Increment</button>
 </div>
 );
}
```

**Use State Hook**:
| Term   | Meaning |          
|---------|---------------------------|
| count  | Current state value            |
| setCount   | Function to update the state     |
| useState(0)    | Initializes count with 0        |


## Handling Events

Event handling in React is similar to HTML, but uses
camelCase for event names and functions instead of strings.

```js
function ClickButton() {
  const handleClick = () => alert('Button clicked!');
  return <button onClick={handleClick}>Click Me</button>;
}
```

### Event Object

You can also access the event object like this:

```js
const handleClick = (e) => {
  console.log("Event type:", e.type);
};
```

---

|Concept | Description | Example |
|-----------|-------------------|------------------|
|State  |Local , changeable ,data inside component | useState(0) |
| useState | Hook Adds State to function Component | const [x, setX] = useState(0) |
| Event Handling | Manage user interactions | onClick={handleClick} |
| setState  | Updates the value and re-renders | setCount (count + 1) |

---

## Conditional Rendering

Conditional rendering allows you to display different UI
based on certain conditions (like if/else in JS).

### Using if:

```js
function Greeting(props) {
  if (props.isLoggedIn) return <h2>Welcome back!</h2>;
  return <h2>Please log in.</h2>;
}
```

### Using ternary or &&:

Use logical operators or ternary operators to conditionally
render elements.

```js
function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}
{isLoggedIn && <button>Logout</button>}
```

```js
Example – Using Logical AND (&&):

{isLoggedIn && <button>Logout</button>}

```

## Lists and Keys

► React can render multiple elements using arrays. Each element in a list should have a **unique key**.

► Use the `.map()` method to render multiple components.

► Keys help React identify which items have changed, been added, or removed.

```js
const fruits = ['Apple', 'Banana', 'Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### Why Keys Are Important:

► Keys help React **optimize rendering** by identifying which items have changed.

► **Avoid using array index as a key**, especially when the list can be reordered, because it can lead to **rendering bugs** and **performance issues**.

► Prefer using a unique id or a stable property from the data.

## Forms and Input Handling

► In React, form elements (input, select, textarea) are **controlled components**, meaning their values are tied to state.

► Use `useState` to track input values and update them with event handlers.

```js
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

► This approach ensures that the UI and data stay in sync, making validation and form submission easier to handle.

## Hooks Overview

| Hook        | Purpose                   |
| ----------- | ------------------------- |
| useState    | Manage local state        |
| useEffect   | Run side effects          |
| useRef      | Access DOM or store value |
| useContext  | Share global data         |
| useMemo     | Cache calculation         |
| useCallback | Cache function reference  |


## Lists and Keys

► React can render multiple elements using arrays. Each element in a list should have a **unique key**.

► Use the `.map()` method to render multiple components.

► Keys help React identify which items have changed, been added, or removed.

```js
const fruits = ['Apple', 'Banana', 'Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```


## Summary Table

| Concept               | Description                           | Example                                                 |
| --------------------- | ------------------------------------- | ------------------------------------------------------- |
| Conditional Rendering | Render components based on condition  | `{isLoggedIn ? "Logout" : "Login"}`                     |
| Lists & Keys          | Render dynamic lists with unique keys | `items.map(item => <li key={item.id}>{item.name}</li>)` |
| Forms & Input         | Capture input using state             | `value={name}, onChange={setName}`                      |

## What are Hooks?

► Hooks are functions that let you **"hook into" React state and lifecycle features** from function components.

► Hooks allow function components to manage **state**, handle **side effects**, and access **refs/context**, previously only possible in class components.

► Hooks were introduced in **React 16.8**.

► Examples of built-in hooks: `useState`, `useEffect`, `useRef`, `useContext`, `useMemo`, `useCallback`

---

## useState – State Hook

► **Purpose**: Add local state to a functional component.

```js
const [count, setCount] = useState(0);

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

---

## useEffect – Side Effect Hook

► **Purpose**: Perform side effects like data fetching, DOM updates, subscriptions.

► Syntax:

```js
useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

► Example – Updating the document title:

```js
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

---

## Side Effects Example – Changing Document Title

```js
import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}
```

---

## Cleanup Function

### When is Cleanup Needed?

► Event listeners
► Subscriptions
► Timers or intervals
► Web socket connections

---

## Example – Timer Cleanup

```js
import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // cleanup to prevent memory leaks
    };
  }, []); // run only once

  return <h2>Timer: {seconds}s</h2>;
}
```

### Lifecycle Phases

| Phase   | Description                                       |
| ------- | ------------------------------------------------- |
| Mount   | Runs once when the component is mounted (`[]`)    |
| Update  | Runs when dependencies in array change            |
| Unmount | Cleanup function runs when the component unmounts |

---

## useRef – Reference Hook

► **Purpose**: Create a **mutable reference** that persists across renders. Often used to **access DOM elements**.

```js
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

---

## useMemo – Memoization Hook

► **Purpose**: Optimize performance by memoizing **expensive calculations**.

```js
const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item.price, 0);
}, [items]);
```

---

## useCallback – Memoized Callback Hook

► **Purpose**: Memoize a **function**, preventing it from being recreated on every render.

```js
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

► **Use Case**: Helps prevent **unnecessary re-renders** of child components that receive functions as props.


---

## Hook Summary Table

| Hook        | Purpose                           | Example Use Case           |
| ----------- | --------------------------------- | -------------------------- |
| useState    | Manage local state                | Counters, forms            |
| useEffect   | Run side effects                  | API calls, event listeners |
| useRef      | Access DOM or store mutable value | Focus input, timers        |
| useContext  | Share global data                 | Themes, auth               |
| useMemo     | Cache expensive calculation       | Filtered lists             |
| useCallback | Cache function reference          | Event handlers in children |

---

## What is Routing?

► Routing in React lets you map **URLs to components**, enabling navigation between views/pages in a **Single Page Application (SPA)** without reloading the page.

► React Router is the most popular routing library for React.

---

## Setup React Router

► Install:

```bash
npm install react-router-dom
```

► Import in Main App:

```js
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Basic Routing Example

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Nested Routing Example

```js
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

---

## useNavigate – Programmatic Navigation

```js
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // logic here...
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## useParams – Access URL Parameters

```js
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
}

// Route setup:
<Route path="/user/:userId" element={<UserProfile />} />
```

---

## Routing Summary Table

| Concept       | Description                     | Example                                       |
| ------------- | ------------------------------- | --------------------------------------------- |
| BrowserRouter | Wraps app to enable routing     | `<BrowserRouter>`                             |
| Route         | Defines path and component      | `<Route path="/about" element={<About />} />` |
| Link          | Navigates without page reload   | `<Link to="/about">About</Link>`              |
| useNavigate   | Navigate programmatically       | `navigate("/home")`                           |
| useParams     | Access route parameters         | `const { id } = useParams()`                  |
| Outlet        | Renders nested route components | Used inside parent route component            |


---

## Styling in React

React supports several ways to apply styles to components:

* Traditional CSS
* CSS Modules
* Styled Components (CSS-in-JS)
* Inline Styles
* Utility-first CSS (e.g., Tailwind CSS)

---

## CSS Modules

► CSS Modules allow scoped and modular CSS. Class names are **locally scoped** to avoid name conflicts.

**Example – App.module.css**

```css
.container {
  background-color: lightblue;
  padding: 20px;
}
```

**App.js**

```js
import styles from './App.module.css';

function App() {
  return <div className={styles.container}>Hello from CSS Module</div>;
}
```

**Pros:**

* Prevents class name collisions.
* Works well with component-based structures.

---

## Styled Components

► Styled Components is a **CSS-in-JS** library allowing you to write actual CSS in JavaScript.

**Install:**

```bash
npm install styled-components
```

**Example:**

```js
import styled from 'styled-components';

const Button = styled.button`
  background: #6200ee;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Styled Button</Button>;
}
```

**Pros:**

* Full CSS support
* Dynamic styling using props
* Cleaner code for complex components

---

## Inline Styles

► Use JavaScript objects to define CSS styles directly in components.

**Example:**

```js
function Box() {
  const style = {
    backgroundColor: 'skyblue',
    padding: '10px',
    borderRadius: '5px'
  };

  return <div style={style}>Inline Styled Box</div>;
}
```

---

## Dynamic Styles with Inline Objects

**Example:**

```js
function Alert({ type }) {
  const style = {
    color: type === 'error' ? 'red' : 'green'
  };

  return <p style={style}>This is a {type} alert.</p>;
}
```

---

## Summary

| Styling Method    | Description                     | Use Case                          |
| ----------------- | ------------------------------- | --------------------------------- |
| Traditional CSS   | External stylesheet             | Simple global styling             |
| CSS Modules       | Scoped CSS per component        | Avoiding name conflicts           |
| Styled Components | CSS-in-JS with props            | Dynamic, component-scoped styling |
| Inline Styles     | JS object syntax for inline CSS | Dynamic or conditional styles     |
| Utility-first CSS | Class-based, like Tailwind      | Fast prototyping and layout       |

---

## Custom Hooks in React

### What Are Custom Hooks?

► A **custom hook** is a JavaScript function that uses built-in hooks (like `useState`, `useEffect`, etc.) to encapsulate and reuse logic across multiple components.

► Custom hooks must start with the word **`use`**, e.g., `useFetch`, `useForm`, `useToggle`.

### Why Use Custom Hooks?

#### ► ✅ Code Reusability
#### ► ✅ Clean and Organized Components
#### ► ✅ Avoid Repetition
#### ► ✅ Encapsulate Complex Logic

---

## Syntax: Create a Simple `useToggle` Hook

### `useToggle.js`

```js
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}

export default useToggle;
```

### Usage:

```js
import useToggle from './useToggle';

function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle();
  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {isVisible && <p>This is visible!</p>}
    </div>
  );
}
```

---

## Real-World Custom Hook Examples

### `useFetch` – Fetch API Data

```js
import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    }
    getData();
  }, [url]);

  return { data, loading };
}
```

### Usage:

```js
function UserList() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

### `useForm` – Handle Form State

```js
import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return [values, handleChange];
}
```

### Usage:

```js
function ContactForm() {
  const [form, handleChange] = useForm({ name: '', email: '' });

  return (
    <>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <p>Name: {form.name}, Email: {form.email}</p>
    </>
  );
}
```

---

## Tips for Creating Custom Hooks

#### ► Name starts with `use`
#### ► Can call other hooks inside
#### ► Return any values (state, functions, objects, etc.)
#### ► Keep them pure and reusable

