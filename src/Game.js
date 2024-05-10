// Game.js
import React, { useState } from 'react';

const Game = ({ onGameEnd, allowedGuesses }) => {
  const [guess, setGuess] = useState('');
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [tries, setTries] = useState(0);
  const [message, setMessage] = useState('');
  const [remainingGuesses, setRemainingGuesses] = useState(allowedGuesses);
  const [gameOver, setGameOver] = useState(false); // New state to track game over status

  const handleGuess = (event) => {
    event.preventDefault();
    if (gameOver) return; // If game is already over, do not handle further guesses
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
    } else {
      setTries(tries + 1);
      setRemainingGuesses(remainingGuesses - 1);
      if (num === answer) {
        setMessage(`Congratulations! You guessed the correct number in ${tries} tries.`);
        onGameEnd(true, tries);
        setGameOver(true); // Set game over when won
      } else if (num < answer) {
        setMessage('Too low. Try again.');
      } else {
        setMessage('Too high. Try again.');
      }
      if (remainingGuesses === 1) {
        setMessage(`Sorry, you've run out of guesses. The correct answer was ${answer}. Please restart the game.`);
        onGameEnd(false, tries);
        setGameOver(true); // Set game over when lost
      }
    }
    setGuess('');
  };

  return (
    <div className="game">
      <h1>Guess the Number (1-100)</h1>
      <p>Tries: {tries}</p>
      <p>Remaining guesses: {remainingGuesses}</p>
      {!gameOver && ( // Conditionally render the form if game is not over
        <form onSubmit={handleGuess}>
          <input
            type="number"
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="Enter your guess..."
            autoFocus
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <p>{message}</p>
    </div>
  );
};

export default Game;
