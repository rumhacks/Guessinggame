// Settings.js
import React, { useState } from 'react';

const Settings = ({ onGuessesChange }) => {
  const [guesses, setGuesses] = useState(5); // Default number of guesses

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setGuesses(value);
      onGuessesChange(value); // Notify parent component of the changes
    }
  };

  return (
    <div className="settings">
      <h1>User Settings</h1>
      <label>
        Number of guesses allowed:
        <input type="number" value={guesses} onChange={handleInputChange} />
      </label>
      <p>Number range to guess: 1 - 100</p>
    </div>
  );
};

export default Settings;
