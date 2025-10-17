import React from 'react';
import './WeatherCard.css';

/**
 * WeatherCard Component
 * Displays weather information in a card format
 * @param {Object} props
 * @param {Object} props.data - Weather data object containing all weather information
 */
function WeatherCard({ data }) {
  // Get weather icon URL from OpenWeatherMap
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  /**
   * Formats temperature value
   * @param {number} temp - Temperature in Celsius
   * @returns {string} Formatted temperature
   */
  const formatTemp = (temp) => {
    return `${Math.round(temp)}°C`;
  };

  return (
    <div className="weather-card">
      {/* Location Header */}
      <div className="weather-header">
        <h2 className="city-name">
          {data.city}, {data.country}
        </h2>
        <p className="weather-description">{data.description}</p>
      </div>

      {/* Main Weather Display */}
      <div className="weather-main">
        <div className="weather-icon-container">
          <img 
            src={iconUrl} 
            alt={data.weather}
            className="weather-icon-large"
          />
        </div>
        <div className="temperature-container">
          <div className="temperature-main">
            {formatTemp(data.temperature)}
          </div>
          <div className="temperature-feels-like">
            Feels like {formatTemp(data.feelsLike)}
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">💧</div>
          <div className="detail-content">
            <div className="detail-label">Humidity</div>
            <div className="detail-value">{data.humidity}%</div>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">🌡️</div>
          <div className="detail-content">
            <div className="detail-label">Pressure</div>
            <div className="detail-value">{data.pressure} hPa</div>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">💨</div>
          <div className="detail-content">
            <div className="detail-label">Wind Speed</div>
            <div className="detail-value">{data.windSpeed} m/s</div>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">☁️</div>
          <div className="detail-content">
            <div className="detail-label">Cloudiness</div>
            <div className="detail-value">{data.clouds}%</div>
          </div>
        </div>
      </div>

      {/* Weather Condition Badge */}
      <div className="weather-condition-badge">
        <span className="condition-label">Condition:</span>
        <span className="condition-value">{data.weather}</span>
      </div>
    </div>
  );
}

export default WeatherCard;

