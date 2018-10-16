import React from 'react';
import { directors } from '../data';

const data = () => {
  return directors.map(function (director) {
    return <div key={director.name}><h3>{director.name}</h3><p>Movies</p><ul>{movies(director.movies)}</ul></div>
  })
}

const movies = (array) => {
  return array.map(function (movie) {
    return <li key={movie}>{movie}</li>
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page!</h1>
      {data()}
    </div>
  );
}

export default Directors
