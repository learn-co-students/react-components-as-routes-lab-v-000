import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}, index) => {
  return (
    <div key={index} className="actor">
      <h2>Name: {name}</h2>
      <p><strong>Movies:</strong></p>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
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

Actors.defaultProps = {
  name: 'name',
  movies: []
}

export default Actors;
