import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Search from "../components/Search";
import * as NewYorkTimesApi from "../services/new-york-times-service";
import MovieList from "../components/MovieList";

const MovieSearchContainer = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    NewYorkTimesApi.search(query, apiKey).then((result) => {
      setIsLoading(false);
      setMovies(result);
    });
  };

  return (
    <>
      <Search
        query={query}
        setQuery={setQuery}
        apiKey={apiKey}
        setApiKey={setApiKey}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MovieSearchContainer;
