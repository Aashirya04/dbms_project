import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Paintings.css";

const PaintingsGallery = () => {
  const [paintings, setPaintings] = useState([]);

useEffect(() => {
    async function paintingData() {
      const res = await axios.get("http://localhost:5000/api/paintings");
      console.log("res bitch",res.data.paintings[0])
      setPaintings(res.data.paintings);

    }
    paintingData();

  },[])

  return (
    <div className="container">
      <h1 className="title">Famous Paintings</h1>
      <div className="grid">
        {paintings.map((painting, index) => (
          <div key={index} className="card">
            <img src={painting.image} alt={painting.name} className="image" />
            <h2 className="name">{painting.name}</h2>
            <p className="artist">{painting.artist}</p>
            <p className="style">{painting.style}</p>
            <p className="museum">Museum: {painting.museum}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingsGallery;
