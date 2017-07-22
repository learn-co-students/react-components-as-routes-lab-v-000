import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsDiv = directors.map((director, index )=> (
    <div key={index}>
    <h2>{director.name}</h2>
      {director.movies.map((movie, index) => (<h3 key={index}>{movie}</h3>))}
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
