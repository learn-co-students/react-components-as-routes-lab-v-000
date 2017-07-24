import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsJSX = directors.map((director, index) => (
    <div key={index}>{director.name}
    <ul>Movies:{ director.movies.join(', ')}</ul></div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsJSX}
    </div>
  );
}

export default Directors
