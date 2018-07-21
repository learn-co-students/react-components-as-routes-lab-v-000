import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => <div key={index + 1} className='actor'>{actor.name}{actor.movies.map((movie, movieIndex) => <p key={movieIndex + 1}>{movie}</p>)}</div>)}
    </div>
  );
};

export default Actors;
