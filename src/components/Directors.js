import React from 'react';
import { directors } from '../data';

const listDirectors = () => {
  return directors.map(({name, movies}) => (
    <div key={name}>
      {name}
      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ));
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors()}
    </div>
  );
};

export default Directors;
