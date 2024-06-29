import { useState } from "react";
import MovieListItem from "./MovieListItem";

const MovieListBox = ({ tempMovieData }) => {
  const [movies, setMovies] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie) => (
            <MovieListItem key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieListBox;
