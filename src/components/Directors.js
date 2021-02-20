import React from "react";
import { directors } from "../data";
import DisplayData from "../utils/DisplayData";

const Directors = () => {
  const displayMovies = (director) =>
    director.movies.map((movie) => <li>{movie}</li>);

  const displayDirectors = () =>
    directors.map((director) => (
      <div>
        {director.name}
        <ul>{displayMovies(director)}</ul>
      </div>
    ));

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
};

export default Directors;
