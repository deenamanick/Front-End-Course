import React, { useState, useEffect } from 'react';
import './App.css';

// Reusable Card Component
const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

// 1. Counter App
export function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <Card>
      <h2>Counter App</h2>
      <p className="value">{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </Card>
  );
}

// 2. Todo List
export function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask('');
    }
  };

  const toggleTask = index => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <h2>Todo List</h2>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="Enter task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => toggleTask(i)}>Done</button>
            <button onClick={() => removeTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

// 3. Calculator
export function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <Card>
      <h2>Calculator</h2>
      <input type="number" onChange={e => setA(Number(e.target.value))} placeholder="A" />
      <input type="number" onChange={e => setB(Number(e.target.value))} placeholder="B" />
      <div>
        <button onClick={() => setResult(a + b)}>+</button>
        <button onClick={() => setResult(a - b)}>-</button>
        <button onClick={() => setResult(a * b)}>*</button>
        <button onClick={() => setResult(b !== 0 ? a / b : 'Err')}>/</button>
      </div>
      <h3>Result: {result}</h3>
    </Card>
  );
}

// 4. Color Picker
export function ColorPicker() {
  const [color, setColor] = useState('#ffffff');
  return (
    <Card style={{ backgroundColor: color }}>
      <h2>Color Picker</h2>
      <input
        type="color"
        className="color"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <p>Selected Color: {color}</p>
    </Card>
  );
}

// 5. Digital Clock
export function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <h2>Digital Clock</h2>
      <p>{time.toLocaleTimeString()}</p>
    </Card>
  );
}

// 6. Quote Generator
export function QuoteGenerator() {
  const quotes = [
    'Be yourself.',
    'Stay hungry, stay foolish.',
    'Simplicity is the ultimate sophistication.',
  ];
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <Card>
      <h2>Quote Generator</h2>
      <button onClick={getQuote}>New Quote</button>
      <p>{quote}</p>
    </Card>
  );
}

// 7. Hide/Show Toggle
export function ToggleComponent() {
  const [visible, setVisible] = useState(true);
  return (
    <Card>
      <h2>Toggle Component</h2>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>This is a toggleable message.</p>}
    </Card>
  );
}

// 8. Form Validation
export function FormValidation() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Name is required');
    } else {
      setError('');
      alert(`Hello, ${name}!`);
    }
  };

  return (
    <Card>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
        <button type="submit">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </Card>
  );
}

// 9. Image Gallery
export function ImageGallery() {
  const images = [
    'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg',
    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
    'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg',
  ];
  const [selected, setSelected] = useState(null);

  return (
    <Card>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} onClick={() => setSelected(src)} alt={`img-${i}`} width={100} style={{ margin: '5px', cursor: 'pointer' }} />
        ))}
      </div>
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected} alt="Selected" style={{ width: '300px' }} />
          </div>
        </div>
      )}
    </Card>
  );
}

// 10. Recipe App
export function RecipeApp() {
  const recipes = [
    { id: 1, name: 'Pasta', ingredients: ['Noodles', 'Tomato'], steps: 'Boil pasta, add sauce' },
    { id: 2, name: 'Omelette', ingredients: ['Eggs', 'Salt'], steps: 'Beat eggs, cook on pan' },
  ];
  const [selected, setSelected] = useState(null);

  return (
    <Card>
      <h2>Recipes</h2>
      <ul className="list">
        {recipes.map(r => (
          <li key={r.id} onClick={() => setSelected(r)} className="clickable">{r.name}</li>
        ))}
      </ul>
      {selected && (
        <div>
          <h3>{selected.name}</h3>
          <p><strong>Ingredients:</strong> {selected.ingredients.join(', ')}</p>
          <p><strong>Steps:</strong> {selected.steps}</p>
        </div>
      )}
    </Card>
  );
}

// 11. Expense Tracker
export function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (!text || !amount) return;
    setTransactions([...transactions, { text, amount: parseFloat(amount) }]);
    setText('');
    setAmount('');
  };

  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <Card>
      <h2>Expense Tracker</h2>
      <p>Balance: ₹{balance.toFixed(2)}</p>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Description" />
      <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <button onClick={addTransaction}>Add</button>
      <ul className="list">
        {transactions.map((t, i) => (
          <li key={i}>{t.text} ₹{t.amount}</li>
        ))}
      </ul>
    </Card>
  );
}

// 12. Accordion
export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: 'What is React?', answer: 'A JavaScript library for building UIs.' },
    { question: 'Why use React?', answer: 'Reusable components, performance, community.' },
  ];

  return (
    <Card>
      <h2>FAQs</h2>
      {faqs.map((faq, i) => (
        <div key={i}>
          <h4 onClick={() => setActiveIndex(i === activeIndex ? null : i)} className="clickable">{faq.question}</h4>
          {i === activeIndex && <p>{faq.answer}</p>}
        </div>
      ))}
    </Card>
  );
}

// 13. Tabs UI
export function TabsUI() {
  const [active, setActive] = useState('Home');
  const tabs = ['Home', 'Profile', 'Settings'];

  return (
    <Card>
      <div>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)} className={active === tab ? 'active' : ''}>{tab}</button>
        ))}
      </div>
      <div>
        {active === 'Home' && <p>This is Home content</p>}
        {active === 'Profile' && <p>This is Profile content</p>}
        {active === 'Settings' && <p>This is Settings content</p>}
      </div>
    </Card>
  );
}

// 14. Star Rating
export function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <Card>
      {[1,2,3,4,5].map(i => (
        <span key={i} onClick={() => setRating(i)} className={i <= rating ? 'star selected' : 'star'}>&#9733;</span>
      ))}
      <p>Rating: {rating}</p>
    </Card>
  );
}

// 15. Product Card with Modal
export function ProductModalApp() {
  const [selected, setSelected] = useState(null);
  const products = [
    { id: 1, name: 'Phone', desc: 'Smartphone with 6.5" display' },
    { id: 2, name: 'Laptop', desc: 'Powerful gaming laptop' }
  ];

  return (
    <Card>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id} onClick={() => setSelected(p)} className="product-card">
          <h4>{p.name}</h4>
        </div>
      ))}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <h3>{selected.name}</h3>
            <p>{selected.desc}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </Card>
  );
}

// 16. Search Filter App
export function SearchFilterApp() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  const [query, setQuery] = useState('');

  const filtered = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));

  return (
    <Card>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search fruits..." />
      <ul>
        {filtered.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </Card>
  );
}

// 17. Stopwatch
export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <Card>
      <h2>{Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </Card>
  );
}

// 18. Multi-step Form
export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      {step === 1 && (
        <div>
          <h3>Step 1</h3>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <button onClick={next}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Step 2</h3>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <button onClick={prev}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Step 3</h3>
          <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
          <button onClick={prev}>Back</button>
          <button onClick={() => alert(JSON.stringify(formData))}>Submit</button>
        </div>
      )}
    </Card>
  );
}

// 19. Movie Browser
export function MovieBrowser() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([
    { title: 'Inception', year: 2010 },
    { title: 'Interstellar', year: 2014 },
    { title: 'The Matrix', year: 1999 },
  ]);

  const filtered = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Card>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies..." />
      <ul>
        {filtered.map((m, i) => (
          <li key={i}>{m.title} ({m.year})</li>
        ))}
      </ul>
    </Card>
  );
}
