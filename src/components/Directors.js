import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map(director => {
    const movies = director.movies.map(movie => {
      return <li>{movie}</li>
    })
    return (
      <div>
        <strong>{director.name}</strong>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors