# 📘 Node.js Learning Guide

A complete beginner-friendly README for learning **Node.js** step-by-step with explanations and examples.

---

## 📌 Table of Contents

1. [Node Intro](#node-intro)
2. [Node Get Started](#node-get-started)
3. [Node JS Requirements](#node-js-requirements)
4. [Node.js vs Browser](#nodejs-vs-browser)
5. [Node Cmd Line](#node-cmd-line)
6. [Node V8 Engine](#node-v8-engine)
7. [Node Architecture](#node-architecture)
8. [Node Event Loop](#node-event-loop)
9. [Asynchronous](#asynchronous)
10. [Node Async](#node-async)
11. [Node Promises](#node-promises)
12. [Node Async/Await](#node-asyncawait)
13. [Node Errors Handling](#node-errors-handling)
14. [Module Basics](#module-basics)
15. [Node Modules](#node-modules)
16. [Node ES Modules](#node-es-modules)
17. [Node NPM](#node-npm)
18. [Node package.json](#node-packagejson)
19. [Node NPM Scripts](#node-npm-scripts)
20. [Node Manage Dependencies](#node-manage-dependencies)
21. [Node Publish Packages](#node-publish-packages)

---

## 📘 Node Intro

Node.js is an open-source, cross-platform **JavaScript runtime** built on Chrome's V8 engine. It allows developers to write **server-side** applications in JavaScript.

**Why Node.js?**

* Fast execution using the V8 engine
* Non-blocking I/O model
* Perfect for APIs and microservices

---

## 🚀 Node Get Started

### Install Node.js

Download from [https://nodejs.org](https://nodejs.org)

### Create a file `app.js`

```js
// app.js
console.log('Hello Node.js');
```

### Run the file

```bash
node app.js
```

---

## 🧾 Node JS Requirements

* Node.js installed
* Code editor (like VS Code)
* Basic JavaScript knowledge

---

## 🌐 Node.js vs Browser

| Feature       | Node.js | Browser |
| ------------- | ------- | ------- |
| File System   | ✅ Yes   | ❌ No    |
| DOM Access    | ❌ No    | ✅ Yes   |
| Window Object | ❌ No    | ✅ Yes   |
| Backend usage | ✅ Yes   | ❌ No    |

---

## 💻 Node Cmd Line

You can run JavaScript directly:

```bash
node
> console.log(2 + 2);
```

To exit:

```
Ctrl + C (twice)
```

---

## 🔧 Node V8 Engine

V8 is Google’s open-source high-performance JavaScript engine used in Chrome and Node.js. It compiles JS into machine code for faster execution.

---

## 🏗️ Node Architecture

Node.js uses **Single Threaded Event Loop Architecture**.

```txt
Client Request --> Event Queue --> Event Loop --> Thread Pool --> Response
```

---

## 🔄 Node Event Loop

Handles asynchronous operations by continuously checking and executing callback functions from the event queue.

```js
console.log('Start');
setTimeout(() => {
  console.log('Inside Timeout');
}, 1000);
console.log('End');
```

---

## ⏳ Asynchronous

```js
console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');
```

Output:

```
1
3
2
```

---

## 📬 Node Async (Callback Example)

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

---

## ✅ Node Promises

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 1000);
  });
}

fetchData().then(data => console.log(data));
```

---

## 🕒 Node Async/Await

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Fetched using async/await'), 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
```

---

## ❌ Node Errors Handling

```js
try {
  throw new Error('Something went wrong');
} catch (err) {
  console.error('Caught Error:', err.message);
}
```

---

## 📦 Module Basics

### Create math.js

```js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };
```

### Use in app.js

```js
// app.js
const math = require('./math');
console.log(math.add(10, 5));
```

---

## 📚 Node Modules

Example using `http` core module:

```js
const http = require('http');

http.createServer((req, res) => {
  res.write('Hello from Node.js Server');
  res.end();
}).listen(3000);
```

---

## ✨ Node ES Modules

```js
// math.mjs
export function multiply(a, b) {
  return a * b;
}
```

```js
// app.mjs
import { multiply } from './math.mjs';
console.log(multiply(3, 4));
```

Enable ES Module by adding this to `package.json`:

```json
"type": "module"
```

---

## 📦 Node NPM

Install lodash:

```bash
npm install lodash
```

Use it:

```js
const _ = require('lodash');
console.log(_.capitalize('node js is awesome'));
```

---

## 📄 Node package.json

```bash
npm init -y
```

Creates:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {}
}
```

---

## 🛠 Node NPM Scripts

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run with:

```bash
npm run start
```

---

## 📂 Node Manage Dependencies

```bash
npm install axios        # install dependency
npm uninstall axios      # remove dependency
npm install --save-dev nodemon  # dev dependency
npm update               # update all
```

---

## 🚀 Node Publish Packages

1. Create npm account at [https://npmjs.com](https://www.npmjs.com)
2. Login via CLI:

```bash
npm login
```

3. Create a package:

```js
// index.js
module.exports = () => console.log('Hello from my package');
```

4. Add to `package.json`:

```json
"main": "index.js"
```

5. Publish:

```bash
npm publish
```

---

