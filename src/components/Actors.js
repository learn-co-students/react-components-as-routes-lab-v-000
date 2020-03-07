import React from 'react';
import { actors } from '../data';
import { act } from 'react-test-renderer';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
      <div>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        {actor.movies.map(movie => 
        <ul>
          <li>{movie}</li>
        </ul>
        )}
      </div>
      )}
    </div>
  );
};

export default Actors;
