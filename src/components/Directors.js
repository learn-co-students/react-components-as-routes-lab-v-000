import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map((director, index) => (
    <div
      key={index}>
      <h2>{director.name}</h2>
      <h3>Movies:</h3>
      <ul>
      {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
    ))
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
