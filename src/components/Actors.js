import React from 'react';
import { actors } from '../data';

const actorList = actors.map(actor => {
  return (
    <div className='actor'>
      <h3>Name: {actor.name}</h3>
      <h5>Movies</h5>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
