import { useState } from "react";
import MovieListBox from "./MovieListBox";
import MovieWatchedBox from "./MovieWatchedBox";

const Main = ({ tempMovieData, tempWatchedData }) => {
  return (
    <main className="main">
      <MovieListBox tempMovieData={tempMovieData} />
      <MovieWatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;
