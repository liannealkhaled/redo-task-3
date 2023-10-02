import React from "react";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  return (
    <div>
      <div className="rowdesign"> {movieslist}</div>
    </div>
  );
};

export default MoviesList;

const movies = [
  {
    title: "the vow",
    genre: "drama",
    duration: "2 Hr",
  },
  {
    title: "scream 3",
    genre: "comdy",
    duration: "3Hr",
  },
  { title: "Greys anatomy", genre: "drama", duration: "1:30 Hr" },
];

const movieslist = movies.map((movie) => {
  return (
    // <MovieItem />
    <div className="listdesign">
      <h3> {movie.title} </h3>
      <h6> {movie.genre}</h6>
      <h6> {movie.duration}</h6>
    </div>
  );
});
