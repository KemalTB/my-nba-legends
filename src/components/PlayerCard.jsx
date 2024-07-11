// src/components/PlayerCard.js
import React, { useState } from "react";
import basketballIcon from "../assets/basketball-icon.png"; 

const PlayerCard = ({ player }) => {
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  let statisticsList;

  
  if (Array.isArray(player.statistics)) {
    statisticsList = player.statistics.map((stat, index) => (
      <div key={index} className="stat-item">
        <img src={basketballIcon} alt="Basketball Icon" className="icon" />
        {stat}
      </div>
    ));
  } else {
    
    statisticsList = player.statistics.split(', ').map((stat, index) => (
      <div key={index} className="stat-item">
        <img src={basketballIcon} alt="Basketball Icon" className="icon" />
        {stat}
      </div>
    ));
  }

  return (
    <div className="player-card" onClick={toggleStats}>
      {showStats ? (
        <div className="player-stats">{statisticsList}</div>
      ) : (
        <img
          src={player.img}
          alt={player.name}
          className="player-img"
        />
      )}
      <h2>{player.name}</h2>
    </div>
  );
};

export default PlayerCard;

