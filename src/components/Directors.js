import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const allDirectors = directors.map((director, index) =>
    <div key={index}>
      <h3>{director.name}</h3>
      <h3>Movies:</h3>
      {director.movies.map(movie => <li>{movie}</li>)}
      <ul>
      </ul>
    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
