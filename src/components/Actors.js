import React from "react";
import { actors } from "../data";

const Actors = () => {
  const displayMovies = (actor) =>
    actor.movies.map((movie) => <li>{movie}</li>);

  const displayActors = () =>
    actors.map((actor) => (
      <div>
        {actor.name}
        <ul>{displayMovies(actor)}</ul>
      </div>
    ));

  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
