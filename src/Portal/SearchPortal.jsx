import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./SearchPortal.css";

const SearchPortal = ({ show, setShow }) => {
  const [input, setInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const array = [
    "Services",
    "Product Detail",
    "Team",
    "Disclaimer",
    "Privacy Policy",
  ];

  function handleClose() {
    setShow(false);
  }

  function handleSearch() {
    const results = array.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredArray(results);
  }

  if (!show) return null;

  return createPortal(
    <div className="search-portal">
      <i onClick={handleClose} className="fa-solid fa-xmark close-icon"></i>
      <div className="search-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search here..."
        />
        <i onClick={handleSearch} className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div className="search-results">
        {filteredArray.length > 0 ? (
          <ul>
            {filteredArray.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{input ? "No results found." : "Start typing to search."}</p>
        )}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default SearchPortal;
