import React from 'react';
import { actors } from '../data';
console.log(actors)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => <div className="actor"><h3>{actor.name}</h3> <p>Movies: {actor.movies.join(", ")}</p></div>)}
    </div>
  );
};

export default Actors;
