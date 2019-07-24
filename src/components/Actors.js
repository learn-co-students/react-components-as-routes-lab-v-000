import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  const actorsList = actors && actors.map((actor, i) =>
    <div key={i}>
      Name: {actor.name}
      <br></br>
      Movies: {actor.movies}
      <br></br>
      <br></br>
    </div>
  )

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
