// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import { data } from "./helper/data";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <CardContainer players={filteredPlayers} />
    </div>
  );
};

export default App;

