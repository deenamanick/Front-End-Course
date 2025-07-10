## Weather App

### 🔍 Step-by-Step Explanation

```jsx
const [city, setCity] = useState('');
const [weather, setWeather] = useState(null);
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
```

* Tracks city input, weather data, loading and error status.

```jsx
const fetchWeather = async () => {
  if (!city) return;
  setLoading(true);
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'City not found');
    }
    const data = await response.json();
    setWeather({ ... });
    setError('');
  } catch (err) {
    setError(err.message);
    setWeather(null);
  }
  setLoading(false);
};
```

* Makes an API call to OpenWeatherMap.
* Parses the response and updates state accordingly.
* Handles errors gracefully.

### 🔽 How It Works

* User types a city name and clicks "Get Weather"
* `fetchWeather()` is triggered
* API call retrieves live weather info
* Results are shown with details like temperature, humidity, wind, sunrise/sunset, and condition

### ✨ Purpose

* Learn API integration
* Conditional UI rendering
* Loading and error handling

---