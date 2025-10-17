import React from 'react';
import './ErrorMessage.css';

/**
 * ErrorMessage Component
 * Displays error messages in a styled container
 * @param {Object} props
 * @param {string} props.message - Error message to display
 */
function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <div className="error-icon">⚠️</div>
      <div className="error-content">
        <h3 className="error-title">Error</h3>
        <p className="error-text">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;

