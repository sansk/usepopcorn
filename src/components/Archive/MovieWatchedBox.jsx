import { useState } from "react";
import WatchedSummary from "../WatchedSummary";
import WatchedMovieItem from "../WatchedMovieItem";

const MovieWatchedBox = ({ tempWatchedData }) => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieItem watched={watched} />
        </>
      )}
    </div>
  );
};

export default MovieWatchedBox;
