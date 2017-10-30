import React from 'react';
import { directors } from '../data';

const getChildren = (movies) => {
  return movies.map((movie) =>
    <ul>{movie}</ul>)
}

const directorsList = directors.map((director, index) => (
    <div>{director.name}{getChildren(director.movies)}</div>
  ))

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
