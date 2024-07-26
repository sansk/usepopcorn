const MovieDetails = ({ selectedId, setSelectedId }) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={() => setSelectedId(null)}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
