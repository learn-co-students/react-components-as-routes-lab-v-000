import React from "react";
import { directors } from "../data";

const Director = ({ name, movies }) => (
  <React.Fragment>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </React.Fragment>
);

const Directors = () => (
  <div>
    <h1>Directors Page</h1>
    {directors.map(({ name, movies }) => (
      <div key={name}>
        <Director name={name} movies={movies} />
      </div>
    ))}
  </div>
);

export default Directors;
