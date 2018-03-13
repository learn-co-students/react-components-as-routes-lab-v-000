import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsDiv = directors.map((director, i) => (
    <div key={i}>
      <h2>{director.name}</h2>
      Movies:
      <ul>
        {director.movies.map((movie, i) => (
          <li key={i}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDiv}
    </div>
  );
}

export default Directors
