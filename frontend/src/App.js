import React from 'react';
import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

/**
 * Main App component
 * Renders the weather dashboard application
 */
function App() {
  return (
    <div className="App">
      <WeatherDashboard />
    </div>
  );
}

export default App;
