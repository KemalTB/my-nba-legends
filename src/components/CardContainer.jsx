// src/components/CardContainer.js
import React from "react";
import PlayerCard from "./PlayerCard";

const CardContainer = ({ players }) => {
  return (
    <div className="card-container">
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default CardContainer;
