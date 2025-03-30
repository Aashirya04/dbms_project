import React, { useState } from "react";
import "./QueryPage.css";

const fixedQueries = [
"Top 5 Artists",
"Artists in Multiple Museums",
"Artists with Multiple Styles",
"Top Museums by Paintings",
"City with Most Museums",
"Museums Open on Sundays",
"Most Common Painting Subjects",
"Most Used Painting Style",
"Artists in At Least 3 Museums",
"Most Visually Documented Artist",
"Paintings by Artists in Their Own Country",
"Paintings with Multiple Styles",
];

const paintingsData = [
  {
    name: "Starry Night",
    artist: "Vincent van Gogh",
    style: "Post-Impressionism",
    museum: "Museum of Modern Art",
    image: "https://example.com/starry-night.jpg",
  },
  {
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
    style: "Renaissance",
    museum: "Louvre Museum",
    image: "https://example.com/mona-lisa.jpg",
  },
];

const QueryPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [filters, setFilters] = useState({ artist: "", style: "", museum: "", painting: "" });

  const filteredPaintings = paintingsData.filter((painting) =>
    Object.entries(filters).every(([key, value]) =>
      value ? (painting[key] && painting[key].toLowerCase() === value.toLowerCase()) : true
    )
  );
  

  return (
    <div className={`query-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <h1>Query Page</h1>
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Fixed Queries */}
      <div className="fixed-queries">
        <h2>Fixed Queries</h2>
        <div className="query-list">
          {fixedQueries.map((query, index) => (
            <button key={index} className="query-button" onClick={() => setSelectedQuery(query)}>
              {query}
            </button>
          ))}
        </div>
      </div>

      {/* Pop-up Box for Fixed Query */}
      {selectedQuery && (
        <div className={`popup ${darkMode ? "dark-mode-popup" : ""}`}>
          <div className="popup-content">
            <h3>{selectedQuery}</h3>
            <p>Here is the data related to: {selectedQuery}</p>
            <button className="close-button" onClick={() => setSelectedQuery(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, artist: e.target.value })}>
          <option value="">Filter by Artist</option>
          {Array.from(new Set(paintingsData.map((p) => p.artist))).map((artist) => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, style: e.target.value })}>
          <option value="">Filter by Style</option>
          {Array.from(new Set(paintingsData.map((p) => p.style))).map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, museum: e.target.value })}>
          <option value="">Filter by Museum</option>
          {Array.from(new Set(paintingsData.map((p) => p.museum))).map((museum) => (
            <option key={museum} value={museum}>{museum}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, name: e.target.value })}>
          <option value="">Filter by Painting</option>
          {Array.from(new Set(paintingsData.map((p) => p.name))).map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      {/* Results Table */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Painting Name</th>
            <th>Artist</th>
            <th>Style</th>
            <th>Image</th>
            <th>Museum</th>
          </tr>
        </thead>
        <tbody>
          {filteredPaintings.map((painting, index) => (
            <tr key={index}>
              <td>{painting.name}</td>
              <td>{painting.artist}</td>
              <td>{painting.style}</td>
              <td>
                <img src={painting.image} alt={painting.name} className="painting-image" />
              </td>
              <td>{painting.museum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryPage;
