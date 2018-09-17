import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let director = directors.map(director => <div><h2>Name: {director.name}</h2> Movies:<ul>{director.movies.map(movie => <li>{movie}</li>)}</ul></div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors
