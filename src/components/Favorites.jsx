import React from "react";
import FavoritesMovieCard from "./FavoritesMovieCard";
import RemoveFromFavoritesButton from "./RemoveFromFavoritesButton";
import "../styles/fav-card-container.css"; // Import the CSS file

const Favorites = ({ favorite, removeFromFavorites }) => {
  return (
    <div className="favorites-container"> {/* Apply the CSS class */}
      {favorite.map((movie) => (
        <div className="cardwithcross" key={movie.imdbID}>
          <FavoritesMovieCard
            name={movie.Title}
            img={movie.Poster}
            releaseYear={movie.Year}
          />
          <RemoveFromFavoritesButton
            imdbID={movie.imdbID}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
