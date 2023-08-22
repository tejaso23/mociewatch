import React from "react";
import "../styles/movie-card.css";
import RemoveFromFavoritesButton from "./RemoveFromFavoritesButton";

const MovieCard = ({
  imdbID,
  name,
  img,
  releaseYear,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  return (
    <div className="movie-card">
      <img src={img} alt="Exchange" />
      <h2>{releaseYear}</h2>
      <p >{name}</p>
     
      
      {!isFavorite ? (
        <button onClick={() => addToFavorites(imdbID)}>❤️</button>
      ) : (
        <RemoveFromFavoritesButton
          imdbID={imdbID}
          removeFromFavorites={removeFromFavorites}
        />
      )}
    </div>
  );
};

export default MovieCard;
