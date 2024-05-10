import React from 'react';

const Stats = ({ gamesWon, avgGuesses }) => {
  return (
    <div>
      <h1>Player Stats</h1>
      <p># Games Won: {gamesWon}</p>
      <p>Average Number of Guesses Needed: {avgGuesses}</p>
    </div>
  );
};

export default Stats;
