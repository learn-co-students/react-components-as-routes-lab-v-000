import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const dirs = directors.map((dir, index) => (
    <div key={index}>
      <h3>Name: {dir.name}</h3>
      <p>Movies:</p>
      <ul>
        {dir.movies.map((movie, i) => (<li key={i}>{movie}</li>))}
      </ul>
    </div>
  ))

  return (
    <div className="directors">
      <h1>Directors Page</h1>
      {dirs}
    </div>
  );
}

export default Directors
