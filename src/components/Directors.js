import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map(director => (
    <div>
      <h3>{director.name}</h3>
      <h5>Movies: </h5>
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
