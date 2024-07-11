// src/components/Header.js
import React, { useState } from "react";

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <header>
      <h1>NBA Legends</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search players..."
          value={inputValue}
          onChange={handleSearch}
        />
        {inputValue && (
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

