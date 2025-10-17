import React from 'react';
import './SearchBar.css';

/**
 * SearchBar Component
 * Input field and button for city search
 * @param {Object} props
 * @param {string} props.city - Current city input value
 * @param {Function} props.setCity - Function to update city value
 * @param {Function} props.handleSearch - Function to handle search submission
 * @param {boolean} props.loading - Loading state indicator
 */
function SearchBar({ city, setCity, handleSearch, loading }) {
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name (e.g., London, New York, Tokyo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
          aria-label="City name input"
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={loading}
          aria-label="Search weather"
        >
          {loading ? (
            <span>Searching...</span>
          ) : (
            <>
              <span className="search-icon">🔍</span>
              <span>Search</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;

