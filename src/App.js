import React, { useState } from "react";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [favorite, setFavorites] = useState([]);

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorite.filter((movie) => movie.imdbID !== imdbID);
    setFavorites(updatedFavorites);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home favorite={favorite} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorite={favorite}
              removeFromFavorites={removeFromFavorites} // Pass the function here
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
