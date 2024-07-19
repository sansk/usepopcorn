import { useState } from "react";
import MovieListItem from "./MovieListItem";

const MovieListBox = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieListItem movies={movies} />}
    </div>
  );
};

export default MovieListBox;
