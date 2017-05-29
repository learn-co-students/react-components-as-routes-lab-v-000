import React from 'react';
import data from '../data';

const Actors = () => {

  const actors = data.actors.map( (actor, index) => (
    <div key={index}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
         {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
        {actors}
    </div>
  );
};

export default Actors;