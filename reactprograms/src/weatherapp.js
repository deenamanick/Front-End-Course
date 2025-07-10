import React, { useState } from 'react';

// ✅ Use your working API key here
const API_KEY = 'c7c1abc39da3db1483ed6feb03fdeb5c';

export function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'City not found');
      }

      const data = await response.json();

      setWeather({
        temp: `${data.main.temp}°C`,
        feels: `${data.main.feels_like}°C`,
        desc: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        wind: `${data.wind.speed} m/s`,
        icon: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      });

      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '450px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '20px' }}>🌤️ Weather App</h2>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{
          padding: '10px',
          width: '70%',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={fetchWeather}
        style={{
          padding: '10px 15px',
          marginLeft: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
        }}
      >
        Get Weather
      </button>

      {loading && <p style={{ marginTop: '20px' }}>Loading...</p>}
      {error && <p style={{ color: 'red', marginTop: '20px' }}>❌ {error}</p>}

      {weather && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h3>
            {weather.city}, {weather.country}
          </h3>

          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="Weather icon"
            style={{ width: '80px', marginBottom: '10px' }}
          />

          <p>🌡️ Temperature: <strong>{weather.temp}</strong></p>
          <p>🤔 Feels Like: <strong>{weather.feels}</strong></p>
          <p>☁️ Condition: <strong>{weather.desc}</strong></p>
          <p>💧 Humidity: <strong>{weather.humidity}</strong></p>
          <p>🌪️ Wind Speed: <strong>{weather.wind}</strong></p>
          <p>🌅 Sunrise: <strong>{weather.sunrise}</strong></p>
          <p>🌇 Sunset: <strong>{weather.sunset}</strong></p>
        </div>
      )}
    </div>
  );
}
