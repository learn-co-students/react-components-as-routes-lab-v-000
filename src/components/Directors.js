import React from 'react';
import { directors } from '../data';

const directorsContent = directors.map((director, idx) => (
  <div key={idx}>
    <h3>Name: {director.name}</h3>
    <p>Movies:</p>
    <ul>
      {director.movies.map((movie, idx) => (
        <li key={idx}>{movie}</li>
      ))}
    </ul>
  </div>
))

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsContent}
    </div>
  );
}

export default Directors
