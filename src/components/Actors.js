import React from "react";
import { actors } from "../data";

const Actor = ({ name, movies }) => (
  <React.Fragment>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ))}
    </ul>
  </React.Fragment>
);

const Actors = () => (
  <div>
    <h1>Actors Page</h1>
    {actors.map(({ name, movies }) => (
      <div key={name}>
        <Actor name={name} movies={movies} />
      </div>
    ))}
  </div>
);

export default Actors;
