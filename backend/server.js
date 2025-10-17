const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Log file path
const logFilePath = path.join(logsDir, 'api-requests.log');

/**
 * Logs API request and response details to a file
 * @param {string} city - The city name requested
 * @param {number} statusCode - HTTP response status code
 * @param {string} message - Additional message or error details
 */
function logRequest(city, statusCode, message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] City: ${city} | Status: ${statusCode} | Message: ${message}\n`;
  
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

/**
 * GET /api/weather
 * Fetches weather data for a given city
 * Query parameter: city (required)
 */
app.get('/api/weather', async (req, res) => {
  console.log('Received request for weather data');
  const { city } = req.query;

  // Validate city parameter
  if (!city || city.trim() === '') {
    const message = 'City parameter is required';
    logRequest(city || 'N/A', 400, message);
    return res.status(400).json({ 
      error: message 
    });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      const message = 'API key not configured';
      logRequest(city, 500, message);
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact administrator.' 
      });
    }

    // STEP 1: Get coordinates using Geocoding API
    const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
    
    const geocodingResponse = await axios.get(geocodingUrl);
    
    // Check if city was found
    if (!geocodingResponse.data || geocodingResponse.data.length === 0) {
      const message = `City '${city}' not found`;
      logRequest(city, 404, message);
      return res.status(404).json({ error: message });
    }
    
    const { lat, lon, name, country } = geocodingResponse.data[0];

    // STEP 2: Fetch weather data using coordinates
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    const weatherResponse = await axios.get(weatherUrl);
    
    // Extract relevant weather information
    const weatherData = {
      city: name || weatherResponse.data.name,
      country: country || weatherResponse.data.sys.country,
      temperature: weatherResponse.data.main.temp,
      feelsLike: weatherResponse.data.main.feels_like,
      humidity: weatherResponse.data.main.humidity,
      pressure: weatherResponse.data.main.pressure,
      weather: weatherResponse.data.weather[0].main,
      description: weatherResponse.data.weather[0].description,
      icon: weatherResponse.data.weather[0].icon,
      windSpeed: weatherResponse.data.wind.speed,
      clouds: weatherResponse.data.clouds.all,
      coordinates: { lat, lon } // Include coordinates in response
    };

    // Log successful request
    logRequest(city, 200, 'Success');
    
    res.json(weatherData);
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      const statusCode = error.response.status;
      let message = 'Error fetching weather data';
      
      if (statusCode === 404) {
        message = `City '${city}' not found`;
        logRequest(city, 404, message);
        return res.status(404).json({ error: message });
      } else if (statusCode === 401) {
        message = 'Invalid API key';
        logRequest(city, 401, message);
        return res.status(500).json({ error: 'Server configuration error - Invalid API key' });
      } else {
        message = error.response.data.message || 'Unknown error from weather API';
        logRequest(city, statusCode, message);
        return res.status(statusCode).json({ error: message });
      }
    } else if (error.request) {
      const message = 'No response from weather API';
      logRequest(city, 503, message);
      return res.status(503).json({ 
        error: 'Unable to reach weather service. Please try again later.' 
      });
    } else {
      const message = error.message || 'Internal server error';
      logRequest(city, 500, message);
      return res.status(500).json({ 
        error: 'An unexpected error occurred' 
      });
    }
  }
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log(`Weather API endpoint: http://localhost:${PORT}/api/weather`);
  console.log(`Logs are being written to: ${logFilePath}`);
  console.log('API key:', process.env.OPENWEATHER_API_KEY);
});

