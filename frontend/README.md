# Weather Dashboard Frontend

A modern, responsive React application for displaying weather information.

## Features

- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, pressure, and wind speed
- 🎨 Beautiful, modern UI with gradient backgrounds
- 📱 Fully responsive design for mobile, tablet, and desktop
- ⚠️ Comprehensive error handling
- ⏳ Loading states with animated spinner
- 🌤️ Weather icons from OpenWeatherMap

## Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create a `.env` file for custom backend URL:
```bash
cp env.example .env
```

Edit `.env` if your backend runs on a different port:
```
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

**Important:** Make sure the backend server is running on `http://localhost:5000` before using the application.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build` directory.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── WeatherDashboard.js    # Main dashboard component
│   │   ├── WeatherDashboard.css
│   │   ├── SearchBar.js           # City search input
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.js         # Weather data display
│   │   ├── WeatherCard.css
│   │   ├── ErrorMessage.js        # Error display component
│   │   └── ErrorMessage.css
│   ├── App.js                     # Root component
│   ├── App.css                    # Global styles
│   └── index.js                   # Application entry point
├── public/
└── package.json
```

## Components

### WeatherDashboard
Main component that manages application state and coordinates other components.

**Features:**
- Handles API calls to the backend
- Manages loading and error states
- Coordinates data flow between components

### SearchBar
Input field and search button for city name entry.

**Features:**
- Form validation
- Disabled state during loading
- Responsive design

### WeatherCard
Displays weather information in a beautiful card layout.

**Shows:**
- City name and country
- Current temperature and "feels like" temperature
- Weather condition with icon
- Humidity, pressure, wind speed, and cloudiness

### ErrorMessage
Displays error messages in a user-friendly format.

**Features:**
- Animated entrance
- Clear error indication
- Responsive design

## Error Handling

The application handles various error scenarios:
- Missing city name
- City not found (404)
- Backend server not running
- Network failures
- Invalid API responses

## Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop:** Full layout with side-by-side elements
- **Tablet:** Adjusted spacing and font sizes
- **Mobile:** Stacked layout, full-width buttons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (⚠️ irreversible)
