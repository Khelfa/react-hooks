import React, { useState } from "react";

import "./App.css";
import { moviesList } from "./assets/mookData.js";
import MoviesList from "./components/MoviesList.js";
import AddMovie from "./components/AddMovie.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);

  return (
    <div className="container">
      <SearchBar
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;
