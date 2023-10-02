const MovieItem = (props) => {
  return (
    <div className="listdesign">
      <h3> {props.movie.title} </h3>
      <h6> {props.movie.genre}</h6>
      <h6> {props.movie.duration}</h6>
    </div>
  );
};

export default MovieItem;
