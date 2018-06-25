import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const list = directors.map((director, index) => (
    <div>
      <h1>{director.name}</h1>
      {director.movies.map(movie => (
        <h3>{movie}</h3>
      ))}
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {list}
    </div>
  );
}

export default Directors
