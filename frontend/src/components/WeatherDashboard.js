import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import ErrorMessage from './ErrorMessage';
import './WeatherDashboard.css';

/**
 * WeatherDashboard Component
 * Main component that manages weather data fetching and display
 */
function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Backend API URL - Update this if your backend runs on a different port
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  /**
   * Fetches weather data from the backend API
   * @param {string} cityName - Name of the city to fetch weather for
   */
  const fetchWeather = async (cityName) => {
    // Reset previous state
    setError(null);
    setWeatherData(null);
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/weather?city=${encodeURIComponent(cityName)}`
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle error responses from the API
        throw new Error(data.error || 'Failed to fetch weather data');
      }

      // Set the weather data on success
      setWeatherData(data);
    } catch (err) {
      // Handle network errors or other failures
      if (err.message === 'Failed to fetch') {
        setError('Unable to connect to the server. Please ensure the backend is running.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles form submission for city search
   * @param {Event} e - Form submit event
   */
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validate city input
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    fetchWeather(city.trim());
  };

  return (
    <div className="weather-dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            <span className="weather-icon">🌤️</span>
            Weather Dashboard
          </h1>
          <p className="dashboard-subtitle">
            Get real-time weather information for any city
          </p>
        </header>

        {/* Search bar component */}
        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          loading={loading}
        />

        {/* Error message display */}
        {error && <ErrorMessage message={error} />}

        {/* Loading indicator */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {/* Weather data display */}
        {weatherData && !loading && <WeatherCard data={weatherData} />}

        {/* Initial state message */}
        {!weatherData && !loading && !error && (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <p>Enter a city name to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherDashboard;

