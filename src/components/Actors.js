import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return (
    <div> 
      <h3>Name: {name}</h3>
      <h3>Movies:</h3>
      <ul>
        {movies.map((movie, ind) => (
          <li key={ind}>{movie}</li>
        ))}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
