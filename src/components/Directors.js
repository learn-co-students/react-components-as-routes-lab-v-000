import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}, index) => (
  <div key={index}>
    <h2>{name}</h2>
    <p><strong>Movies:</strong></p>
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
)

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
}

Directors.defaultProps ={
  name: 'name',
  movies: []
}

export default Directors
