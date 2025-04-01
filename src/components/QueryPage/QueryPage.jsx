import React, { useEffect, useState } from "react";
import "./QueryPage.css";
import axios from "axios";

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
  "Paintings by Area",
  "Paintings by Artists in Their Own Country",
  "Paintings with Multiple Styles",
];

const queryToEndpoint = {
  "Top 5 Artists": "/top_5_artists",
  "Artists in Multiple Museums": "/artists_multiple_museums",
  "Artists with Multiple Styles": "/artists_multiple_styles",
  "Top Museums by Paintings": "/top_museums",
  "City with Most Museums": "/city_with_most_museums",
  "Museums Open on Sundays": "/museums_open_sunday",
  "Most Common Painting Subjects": "/common_painting_subjects",
  "Most Used Painting Style": "/most_used_style",
  "Artists in At Least 3 Museums": "/artists_three_museums",
  "Paintings by Area": "/paintings_by_area",
  "Paintings by Artists in Their Own Country": "/top-artists-by-paintings",
  "Paintings with Multiple Styles": "/paintings_multiple_styles",
};

const QueryPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [filters, setFilters] = useState({ artist: "", style: "", museum: "", name: "" });
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPaintings() {
      try {
        const res = await axios.get("http://localhost:5000/api/paintings");
        setPaintings(res.data.paintings);
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    }
    fetchPaintings();
  }, []);

  useEffect(() => {
    async function fetchPaintings() {
      if (!selectedQuery) return;

      const endpoint = queryToEndpoint[selectedQuery];
      if (!endpoint) return;

      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000${endpoint}`);
        setPaintings(res.data.results || []);
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching paintings:", error);
        setPaintings([]);
      }
      setLoading(false);
    }

    fetchPaintings();
  }, [selectedQuery]);

  const filteredPaintings = paintings.filter((painting) =>
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

      {selectedQuery && (
        <div className={`popup ${darkMode ? "dark-mode-popup" : ""}`}>
          <div className="popup-content">
            <h3>{selectedQuery}</h3>
            <p>Showing results for: <strong>{selectedQuery}</strong></p>
            <button className="close-button" onClick={() => setSelectedQuery(null)}>Close</button>
          </div>
        </div>
      )}

      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, artist: e.target.value })}>
          <option value="">Filter by Artist</option>
          {Array.from(new Set(paintings.map((p) => p.artist))).map((artist) => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, style: e.target.value })}>
          <option value="">Filter by Style</option>
          {Array.from(new Set(paintings.map((p) => p.style))).map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, museum: e.target.value })}>
          <option value="">Filter by Museum</option>
          {Array.from(new Set(paintings.map((p) => p.museum))).map((museum) => (
            <option key={museum} value={museum}>{museum}</option>
          ))}
        </select>

        <select onChange={(e) => setFilters({ ...filters, name: e.target.value })}>
          <option value="">Filter by Painting</option>
          {Array.from(new Set(paintings.map((p) => p.name))).map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <table className="results-table">
  <thead>
    <tr>
      {filteredPaintings.length > 0 &&
        Object.keys(filteredPaintings[0]).map((key) => (
          <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}</th>
        ))}
    </tr>
  </thead>
  <tbody>
    {loading ? (
      <tr>
        <td colSpan="100%">Loading...</td>
      </tr>
    ) : filteredPaintings.length === 0 ? (
      <tr>
        <td colSpan="100%">No results found.</td>
      </tr>
    ) : (
      filteredPaintings.map((painting, index) => (
        <tr key={index}>
          {Object.entries(painting).map(([key, value]) => (
            <td key={key}>
              {key === "image" ? (
                <img
                  src={value}
                  alt={painting.name || "Painting"}
                  className="painting-image"
                />
              ) : (
                value
              )}
            </td>
          ))}
        </tr>
      ))
    )}
  </tbody>
</table>

    </div>
  );
};

export default QueryPage;
