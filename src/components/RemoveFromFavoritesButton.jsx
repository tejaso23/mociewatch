import React from "react";

const RemoveFromFavoritesButton = ({ imdbID, removeFromFavorites }) => {
  return (
    <button onClick={() => removeFromFavorites(imdbID)}>❌</button>
  );
};

export default RemoveFromFavoritesButton;
