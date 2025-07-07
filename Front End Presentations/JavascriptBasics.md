# JavaScript

# Fundamentals

```
Concepts, Examples, and Validations
```

## Javascript Intro

► JavaScript is a versatile scripting language used
primarily for creating dynamic and interactive web
content. It runs on the client side and can manipulate
HTML and CSS, validate form inputs, and handle events.

► Example:

► **<script> alert('Hello, JavaScript!');</script>**


## Variables

► Variables store data that can be used and manipulated
throughout the program. Declared using var, let, or
const.

► Example:

► let name = "John";

► const age = 25;

► var isStudent = true;


## Datatypes

Common data types include:

String , Number , Boolean , Undefined , Null ,Object ,Array

► Example:

► **let str = "Hello";**

► **let num = 10;**

► **let bool = true;**

► **let undf;**

► **let nul = null;**

► **let obj = { name: "Alice" };**

► **let arr = [1, 2, 3];**


## Operators

► Operators are used to perform operations on variables
and values.

► Includes arithmetic, comparison, logical, assignment,
and more.

► Example:

► let x = 5 + 2; // Arithmetic

► let y = x > 3; // Comparison

► let z = true && false; // Logical

► x += 1; // Assignment


## Conditional Statements

► Conditional statements let you make decisions in your
code — you execute different blocks of code depending
on whether a condition is true or false.

► Control flow based on conditions using if, else if, else ,
switch and ternary condition


## If Condition Statement

► Executes a block of code only if the condition is true.

► Example:

![If Condition Screenshot](./assets/ifconditionjs.png "If Condition Screenshot") *(placeholder image)*

► Output:

```
You are an adult.
```

## If...else Condition Statement

► Executes one block if the condition is true, and another
if it's false.

► Example:

![If Else Condition Screenshot](./assets/ifelsejs.png "If Else Condition Screenshot") *(placeholder image)*

► Output:

```
You are a minor.
```

## If...else if...else Statement

► Checks multiple conditions in order.

► Example:

![If Else If Condition Screenshot](./assets/ifelseifjs.png "If Condition Screenshot") *(placeholder image)*

► Output:

```
Grade: B
```

## Switch Statement

► Used to perform different actions based on **multiple
possible values** of a variable.

► Example:

![Switch Condition Screenshot](./assets/switchjs.png "Switch Screenshot") *(placeholder image)*

► Output : **Wednesday**


## Ternary Statement

► A shortcut for simple if...else. Returns one of two
values based on a condition.

► Example:

![Ternary Condition Screenshot](./assets/ternaryjs.png "Ternary Condition Screenshot") *(placeholder image)*

► Output:

```
Adult
```

## Looping Structure

► **Looping conditions** allow you to repeatedly execute a
block of code as long as a specified condition is true.

► Example:

![Looping Screenshot](./assets/loopingjs.png "Looping Screenshot") *(placeholder image)*


## For Loop

Executes a block of code a known number of times. It
includes three parts:

- **Initialization** – runs once at the beginning.
- **Condition** – checked before every iteration.
- **Increment/Decrement** – updates the loop counter after
    each iteration.

► Example:

![For Loop Screenshot](./assets/forloopjs.png "For Loop Screenshot") *(placeholder image)*

► Output : 0 1 2 3 4


## While Loop

► Executes a block of code as long as the condition is
true. The condition is evaluated before the loop body.

► Example:

![While Loop Screenshot](./assets/whileloopjs.png "While Loop Screenshot") *(placeholder image)*

► Output : 0 1 2 3 4


## Do...While Loop

► Similar to while, but the loop executes at least once,
because the condition is checked after the loop body.

► Example:

![Do While Loop Screenshot](./assets/dowhilejs.png "Do while Loop Screenshot") *(placeholder image)*

► Output : 0 1 2 3 4


## For...In Loop

► Used to iterate over **keys (property names)** of an
object

► Example:

![For In Loop Screenshot](./assets/forinjs.png "For In Loop Screenshot") *(placeholder image)*

► Output :

```
name: Alice
age: 25
```

## For...of Loop

► Used to iterate over **iterable values** like arrays, strings,
maps, etc.

► Example:

![For Of Loop Screenshot](./assets/forofjs.png "For Of Loop Screenshot") *(placeholder image)*

► Output :

```
red
green
blue
```

## Loop Control Statements

► **Loop control statements** are used to alter the flow of
loops — they let you **skip** , **exit** , or **redirect** iterations in
a loop.

► There are **two main loop control statements** in
JavaScript:
► Break
► Continue


## Break Statement

► Immediately **exits** the loop.

► Useful when you want to stop the loop early based on a
condition.

► Example:

![Break Screenshot](./assets/breakjs.png "Break Screenshot") *(placeholder image)*

► Output : 0 1 2


## Continue Statement

► **Skips** the current iteration and moves to the next one.

► Loop does **not stop** , just skips that cycle

► Example:

![Continue Loop Screenshot](./assets/continuejs.png "Continue Screenshot") *(placeholder image)*

► Output : 0 1 2 4


## Array

► An **array** is a special variable in JavaScript that can
store **multiple values** in a single variable.

► Example:

![Array Screenshot](./assets/arrayjs.png "Array Screenshot") *(placeholder image)*

► Output : apple


## Common Array Methods

► push

► pop

► shift

► unshift

► indexof

► foreach

► map

► filter

► find

► join

► reverse


## push() Method

► Adds an element to the end of the array.

► Example:

![Push Screenshot](./assets/pushjs.png "Push Screenshot") *(placeholder image)*

► Output: ["apple", "banana", "cherry"]


## pop() Method

► Removes the last element from the array.

► Example:

![Pop Screenshot](./assets/popjs.png "Pop Screenshot") *(placeholder image)*

► Output: ["apple", "banana"]


## shift() Method

```
► Removes the first element from the array.
```
```
► Example:
```
![Shift Screenshot](./assets/20.png "Shift Screenshot") *(placeholder image)*

```
► Output: ["banana", "cherry"]
```

## unshift() Method

```
► Adds an element to the start of the array.
```
```
► Example:
```
![Unshift Screenshot](./assets/21.png "Unshift Screenshot") *(placeholder image)*

```
► Output: ["apple", "banana", "cherry"]
```

## indexof() Method

► Returns the index of the specified element. Returns - 1
if not found.

► Example:

![Index Of](./assets/22.png "Index Of Screenshot") *(placeholder image)*

► Output: 1


## foreach() Method

► Executes a function for each item in the array.

► Example:

![For Each](./assets/23.png "For Each Screenshot") *(placeholder image)*

► Output:

```
red
green
blue
```

## map() Method

► Creates a new array by applying a function to each
item.

► Example:

![Map ](./assets/24.png "Map Screenshot") *(placeholder image)*

► Output: [2, 4, 6]


## filter() Method

► Returns a new array with elements that match a
condition.

► Example:

![Filter](./assets/25.png "Filter Screenshot") *(placeholder image)*

► Output: [2, 4]


## find() Method

► Returns the first element that satisfies a condition.

► Example:

![Find](./assets/26.png "Find Screenshot") *(placeholder image)*

► Output: 6


## join() Method

► Combines all elements into a string.

► Example:

![Join](./assets/27.png "Join Screenshot") *(placeholder image)*

► Output: apple, banana, cherry


## reverse() Method

► Reverses the array in-place.

► Example:

![Reverse](./assets/28.png "Reverse Screenshot") *(placeholder image)*

► Output: [3, 2, 1]


## String

► Strings are used for storing text.

► A string is a sequence of characters used to represent
text.

► Example:

► let greeting = 'Hello';


## String Methods

► Common methods **include length, toUpperCase(),
indexOf()** , etc.

► Example:

![String](./assets/29.jpg "String Screenshot") *(placeholder image)*


## 🔤 Common String Methods

| **Method**       | **Purpose**                          |
|------------------|--------------------------------------|
| `length`         | Get string length                    |
| `toLowerCase()`  | Convert to lowercase                 |
| `toUpperCase()`  | Convert to uppercase                 |
| `charAt()`       | Get character at specific index      |
| `indexOf()`      | Get position of substring            |
| `includes()`     | Check if substring exists            |
| `replace()`      | Replace part of string               |
| `slice()`        | Extract a part using index           |
| `substring()`    | Similar to `slice()` (no negatives)  |
| `split()`        | Convert string to array              |
| `trim()`         | Remove spaces from both ends         |



## length

► Returns the number of characters in the string.

► Example:

![Length](./assets/30.png "Length Screenshot") *(placeholder image)*

► Output: 5


## toUpperCase() / toLowerCase()

► Converts string to upper or lower case.

► Example:

![To Uppercase / To Lowercase](./assets/31.png "To Uppercase / To Lowercase Screenshot") *(placeholder image)*

► Output:

```
JAVASCRIPT
javascript
```

## charAt(index)

► Returns the character at a specific index (starting from
0).

► Example:

![Char At](./assets/32.png "Char At Screenshot") *(placeholder image)*

► Output: e


## indexOf(substring)

► Returns the position of the first occurrence of a
substring.

► Example:

![Index of](./assets/33.png "Index Of Screenshot") *(placeholder image)*

► Output: 11


## includes(substring)

► Checks if a substring exists → returns true or false.

► Example:

![Includes](./assets/34.png "Includes Screenshot") *(placeholder image)*

► Output: true


## replace(old, new)

► Checks if a substring exists → returns true or false.

► Example:

![Replace ](./assets/35.png "Replace Screenshot") *(placeholder image)*

► Output:

```
Hello JavaScript
```

## slice(start, end)

► Extracts a section of a string.

► Example:

![Slice ](./assets/36.png "Slice Screenshot") *(placeholder image)*

► Output:

```
Java
```

## substring(start, end)

► Similar to slice() but can't accept negative values.

► Example:

![Substring ](./assets/37.png "Substring Screenshot") *(placeholder image)*

► Output:

```
gram
```

## split(separator)

► Splits a string into an array based on a separator.

► Example:

![Split ](./assets/38.png "Split Screenshot") *(placeholder image)*

► Output:

```
["apple", "banana", "grape"]
```

## trim()

► Removes whitespace from both ends.

► Example:

![Trim ](./assets/39.png "Trim Screenshot") *(placeholder image)*

► Output:

```
"clean me"
```

## Template Strings

► Allows you to embed variables using backticks ` and ${}
syntax.

► Example:

![Template Strings ](./assets/40.png "Template Strings Screenshot") *(placeholder image)*

► Output:

```
Hello, Alice!
```

## Object Intro

► Objects are collections of key-value pairs.

► Example:

► let person = {name: 'John', age: 30};


## Object Properties

► Used to access values in an object.

► Example:

► let person = {name: 'John', age: 30};
person.name; // John


## Object Method

► Functions stored as object properties.

► Example:

![Object method ](./assets/41.jpg "Object method Screenshot") *(placeholder image)*


## Object Display

► Objects can be displayed using console.log or
JSON.stringify.

► Example:


## Object Accessors

► Get and set properties using accessors.

► Example:

![Object Assessors ](./assets/42.jpg "Object Assessors Screenshot") *(placeholder image)*


## Object Sets

► Collections of unique values.

► Example:

![Object Sets ](./assets/43.jpg "Object Sets Screenshot") *(placeholder image)*


## Object Maps

► Maps are key-value collections like objects.

► Example:

![Object Maps ](./assets/44.jpg "Object Maps Screenshot") *(placeholder image)*


## Function Intro

► A function is a reusable block of code that performs a
specific task.

► You can define a function once and call it multiple
times with different inputs (parameters).


## Types of Functions

► Named (Function Declaration) , anonymous, arrow
functions, Constructor Function , etc.

► Example:

► const add = (a, b) => a + b; // Arrow Functions


### Function Declaration (Named Function)

► A function defined using the function keyword.

► Example:

![Function Declaration - Named Function ](./assets/46.png "Function Declaration - Named Function Screenshot") *(placeholder imag

► Output: Hello, Alice


### Function Expression

► A function assigned to a variable. Can be anonymous or
named.

► Example:

![Function Expression ](./assets/47.png "Function Expression Screenshot") *(placeholder image)*

► Output: 8


### Arrow Expression

► A shorter syntax for writing functions using =>.

► Example:

![Arrow Function ](./assets/48.png "Arrow Function Screenshot") *(placeholder image)*

► Output: 20


### Constructor Function

► Used to create objects. Naming usually starts with a
capital letter.

► Example:

![Constructor Function ](./assets/49.png "Constructor Function Screenshot") *(placeholder image)*

► Output: John


## Function Parameter

► Input values passed to functions.

► Example:

![Function Parameter ](./assets/50.jpg "Function Parameter Screenshot") *(placeholder image)*


## Function Invocation

► Calling the function to execute.

► Example:

![Function Invocation ](./assets/51.jpg "Function Invocation Screenshot") *(placeholder image)*


## Function Call

► Can be called using .call() method.

► Example:

![Function Call ](./assets/52.jpg "Function Call Screenshot") *(placeholder image)*


## Function Bind

► Creates a new function with 'this' bound to the provided
value.

► Example:

![Function Bind ](./assets/53.jpg "Function Bind Screenshot") *(placeholder image)*


## Event Handling

► Used to handle events like click, submit, etc.

► Example:

► element.addEventListener('click', myFunction);


## OnClick Event

► Triggers when an element is clicked.

► Example:

► <button onclick='myFunction()'>Click</button>

![Onclick](./assets/54.png "Onclick Screenshot") *(placeholder image)*

## mouseover / mouseout Events

```
► mouseover: triggers when mouse enters an element.
► mouseout: triggers when mouse leaves the element.
```
```
► Example:

```

![Mouse Over / Out ](./assets/55.png "Mouse Over / Out  Screenshot") *(placeholder image)*

```
► Output:
Text turns red when hovered.
Turns black again when the mouse leaves.
```

## keydown / keyup Events

► keydown: triggers when a key is pressed.

► keyup: triggers when a key is released.

► Example:

![Key Down / Up ](./assets/56.png "Key Down / Up  Screenshot") *(placeholder image)*

► Output: In the console

```
Key down
Key up
```

## focus / blur Events

► focus: when input element gets focus.

► blur: when it loses focus.

► Example:

![Focus / Blur ](./assets/57.png "Focus / Blur  Screenshot") *(placeholder image)*

► Output:

```
Background turns yellow when focused.
Returns to white when you click elsewhere.
```

## dblclick Event

► Triggered when the user double-clicks an element.

► Example:

![Double Click ](./assets/58.png "Double Click  Screenshot") *(placeholder image)*

► Output: Text changes to:

```
You double-clicked me!
```

## load Event

► Fires when the page or an image finishes loading.

► Example:

![Load Event ](./assets/59.png "Load Event  Screenshot") *(placeholder image)*

► Output: Text changes to:

```
Page has fully loaded!
```

## addEventListener()

► The addEventListener() method attaches an event handler to a
document.

► Example:

![Add Event Listener ](./assets/60.png "Add Event Listener  Screenshot") *(placeholder image)*

► Output: When button is clicked:

```
Hi there!
```

## change Event

► Fires when the value of an input/select changes.

► Example:

![Change Event ](./assets/61.png "Change Event  Screenshot") *(placeholder image)*

► Output: If you choose "CSS", it alerts:

```
You selected: CSS
```

## OnSubmit Event

► Triggers when a form is submitted.

► Example:

![On Submit Event ](./assets/62.png "On Submit Event  Screenshot") *(placeholder image)*


## HTML DOM Documents

► The Document Object

► DOM -Document Object Model

► When an HTML document is loaded into a web browser, it

```
becomes a document object.
```
► The document object is the root node of the HTML document.

► The document object is a property of the window object.

► The document object is accessed with:

► window.document or just document


## Why is DOM Important?

► Because it lets you dynamically control your webpage using

```
JavaScript.
```
► For example:

► Change text

► Add new elements

► Remove or hide content

► React to user actions (clicks, typing, etc.)


## 📚 Common DOM Methods

| **Purpose**             | **Method**                 |
|-------------------------|----------------------------|
| By ID                   | `getElementById()`         |
| By Class                | `getElementsByClassName()` |
| By Tag                  | `getElementsByTagName()`   |
| CSS Selector (single)   | `querySelector()`          |
| CSS Selector (all)      | `querySelectorAll()`       |



## getElementById()

► The getElementById() method returns an element with
a specified value.

► The getElementById() method returns null if the
element does not exist.

![getelementbyId ](./assets/63.png "Get Element By ID Screenshot")*(placeholder image)*


## getElementsByClassName()

► The getElementsByClassName() method returns a
collection of elements with a specified class name(s).

![getelementbyClassName ](./assets/64.png "Get Elements By Class Name Screenshot")*(placeholder image)*


## getElementsByTagName()

► The getElementsByTagName() method returns a collection of
all elements with a specified tag name.

► The getElementsByTagName() method returns an
HTMLCollection.

► The getElementsByTagName() property is read-only.

![getelementByTagName ](./assets/65.png "Get Elements By Tag Name Screenshot")*(placeholder image)*


## querySelector()

► The querySelector() method returns the first element that
matches a CSS selector.

► To return all matches (not only the first), use the
querySelectorAll() instead.

![Query Selector ](./assets/66.png "Query Selector Screenshot")*(placeholder image)*


## querySelectorAll()

► The querySelectorAll() method returns all elements that
matches a CSS selector(s).

![Query Selector All ](./assets/67.png "Query Selector All Screenshot")*(placeholder image)*


## JS Validation Intro

► Used to ensure input is correct before submission.

► Example:

► if(input == '') alert('Required field');


## Null constraint Validation

► Check if input is null or empty.

► Example:

![Null Constraint Validation ](./assets/68.jpg "Null Constraint Validation Screenshot")*(placeholder image)*


## Password Validation

► Ensure password meets requirements.

► Example:

► if(pwd.length < 8) alert('Too short');

![Password Validation ](./assets/69.jpg "Password Validation Screenshot")*(placeholder image)*


## Retype Password Validation

► Ensure retyped password matches.

► Example:

![Retype Password Validation ](./assets/70.jpg "Retype Password Validation Screenshot")*(placeholder image)*


## Number Validation

► Checks if input is a number.

► Example:

![Number Validation ](./assets/71.png "Number Validation Screenshot")*(placeholder image)*


## Email validation

► Validate email format using regex.

► Example:

![Email Validation ](./assets/72.jpg "Email Validation Screenshot")*(placeholder image)*


