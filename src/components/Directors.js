import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div className='director'>
      <h1>Directors Page</h1>
      {returnDirectors}
    </div>
  );
}

const returnDirectors = directors.map((director, i) => (
  <div key={i}>
    <h2>Name: {director.name}</h2>
    <h3>Movies: </h3>
    <ul>
      {director.movies.map((movie, i) => (
        <li key={i}>{movie}</li>
      ))}
    </ul>
  </div>
))


export default Directors
