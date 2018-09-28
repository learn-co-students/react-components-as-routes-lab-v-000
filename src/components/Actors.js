import React from 'react';
import { actors } from '../data';

const Actor = ({ name, movies }) => {
  return (
    <div className='actor'>
      <h2>Name: {name}</h2>
      Movies:
      <ul>
        {movies.map(movie =>
          <li>{movie}</li>
        )}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => Actor(actor))}
    </div>
  );
};

export default Actors;
