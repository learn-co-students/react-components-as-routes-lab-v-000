import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let actor = actors.map(function (actor) {
    return (
      <div className='actor'>
        <h2>Name: {actor.name}</h2>
        <p>Movies:</p>
        <ol>
          {actor.movies}
        </ol>
      </div>
      )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
