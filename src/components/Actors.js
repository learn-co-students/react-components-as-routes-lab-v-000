import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log("actors", this)
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor) => 
        <div>
          <h3>Name: {actor.name}</h3>
          <h4>Movies:</h4>
          <ul>
            {actor.movies.map((movie) => 
            <li>{movie}</li>
            )}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Actors;
