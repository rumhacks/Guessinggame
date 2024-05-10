// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Game from './Game';
import Stats from './Stats';
import Settings from './Settings';

const GuessApp = () => { // Renamed component to GuessApp
  const [gamesWon, setGamesWon] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [gameKey, setGameKey] = useState(0);
  const [allowedGuesses, setAllowedGuesses] = useState(5);

  const handleGameEnd = (won, guesses) => {
    setTotalGames(totalGames + 1);
    if (won) {
      setGamesWon(gamesWon + 1);
    }
    setTotalGuesses(totalGuesses + guesses);
  };

  const calculateAvgGuesses = () => {
    return totalGames === 0 ? 0 : totalGuesses / totalGames;
  };

  const handleRestart = () => {
    setGameKey(gameKey + 1);
  };

  const handleGuessesChange = (guesses) => {
    setAllowedGuesses(guesses);
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stats">Player Stats</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
          <br></br>
          <button onClick={handleRestart}>Restart</button>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Game
              key={gameKey}
              onGameEnd={handleGameEnd}
              allowedGuesses={allowedGuesses}
            />
          </Route>
          <Route path="/stats">
            <Stats gamesWon={gamesWon} avgGuesses={calculateAvgGuesses()} />
          </Route>
          <Route path="/settings">
            <Settings onGuessesChange={handleGuessesChange} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default GuessApp; // Exporting GuessApp component
