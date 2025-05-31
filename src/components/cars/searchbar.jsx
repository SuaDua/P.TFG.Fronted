import React, { useState } from "react";
import '../styles/searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // 🔍 Filtrar la lista en tiempo real
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar coche..."
        value={searchTerm}
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;