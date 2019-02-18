import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='testactor'>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.name} className='actor'>
          <h3>{actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
          </ul>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};


export default Actors;
