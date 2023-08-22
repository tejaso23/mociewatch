
import React from "react";
import "../styles/fav-card.css"

const FavoritesMovieCard = ({ name, img, releaseYear }) => {
  return (
    <div className="fav-card">
      <h1>{name}</h1>
      <h2>{releaseYear}</h2>
      <img src={img} alt="Exchange" />
    </div>
  );
};

export default FavoritesMovieCard;
