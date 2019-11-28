import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

const displayDirectors = () => {
  return directors.map(director => {
    return <div key={director.name}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map(movie => {
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
    })
}

export default Directors
