// Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "../styles/movie-card.css";
import Search from "./Search";

const Home = ({ favorite, setFavorites }) => {
  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setquery] = useState("");
  const [searchType, setSearchType] = useState("title");

  
  useEffect(() => {
    const fetchombd = async () => {
      try {
        if (query.trim().length > 0) {
          const ombd = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_ombdapikey}${query}`
          );
          console.log(ombd.data.Search);
          setMovies(ombd.data.Search);
        } else {
          setMovies([]); // Set an empty array as the default value
        }
      } catch (error) {
        setError("Error while fetching OMDB data", error);
      }
    };

    fetchombd();
  }, [query, searchType]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addToFavorites = (imdbID) => {
    if (!favorite.some((movie) => movie.imdbID === imdbID)) {
      const movieToAdd = Movies.find((movie) => movie.imdbID === imdbID);
      if (movieToAdd && !favorite.some((movie) => movie.imdbID === imdbID)) {
        setFavorites([...favorite, movieToAdd]);
      }
    }
  };

  const removeFromFavorites = (imdbID) => {
    const updatedFavorites = favorite.filter(
      (movie) => movie.imdbID !== imdbID
    );
    console.log("updated22");
    setFavorites(updatedFavorites);
  };

  console.log("Home - Movies:", Movies);
  console.log("Home - favorite:", favorite);

  return (
    <>
      <div className="home-container">
        <div>
          <Search setquery={setquery} query={query}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="actor">Actor</option>
              <option value="director">Director</option>
              <option value="year">Year</option>
            </select>
          </Search>
        </div>
        <div className="main">
          {Movies &&
            Movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                imdbID={movie.imdbID}
                name={movie.Title}
                img={movie.Poster}
                releaseYear={movie.Year}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={favorite.some(
                  (fav) => fav.imdbID === movie.imdbID
                )}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
