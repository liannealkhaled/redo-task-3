const MovieItem = ({ title, duration, genre }) => {
  return (
    <div className="listdesign">
      <h3> {title} </h3>
      <h6> {genre}</h6>
      <h6> {duration}</h6>
    </div>
  );
};

export default MovieItem;
