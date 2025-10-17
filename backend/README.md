# Weather Dashboard Backend

A Node.js/Express backend API for fetching weather data and logging requests.

## Features

- RESTful API for weather data retrieval
- Request/response logging to file
- Error handling for invalid cities and API failures
- CORS enabled for frontend integration
- Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory:
```bash
cp env.example .env
```

3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to `.env`:
```
OPENWEATHER_API_KEY=your_actual_api_key_here
PORT=5000
```

## Running the Server

Development mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### GET /api/weather

Fetches weather data for a specific city.

**Query Parameters:**
- `city` (required): Name of the city

**Example Request:**
```
GET http://localhost:5000/api/weather?city=London
```

**Success Response (200):**
```json
{
  "city": "London",
  "country": "GB",
  "temperature": 15.5,
  "feelsLike": 14.2,
  "humidity": 72,
  "pressure": 1013,
  "weather": "Clouds",
  "description": "scattered clouds",
  "icon": "03d",
  "windSpeed": 3.5,
  "clouds": 40
}
```

**Error Responses:**
- `400`: Missing city parameter
- `404`: City not found
- `500`: Server error
- `503`: Weather service unavailable

### GET /api/health

Health check endpoint.

**Example Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-17T12:00:00.000Z"
}
```

## Logging

All API requests are logged to `logs/api-requests.log` with the following information:
- Timestamp
- City name
- Response status code
- Success/error message

## Error Handling

The API handles various error scenarios:
- Invalid or missing city names
- API key configuration issues
- Network failures
- Invalid API responses
- Rate limiting

All errors return appropriate HTTP status codes and user-friendly error messages.

