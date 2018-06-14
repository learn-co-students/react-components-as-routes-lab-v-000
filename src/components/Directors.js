import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map(director => {
    const directorsMovies = director.movies.map(movie => <li>{movie}</li>)
    return (
    <div className='diector'>
      <h2>{director.name}</h2>
      <ul>{directorsMovies}</ul>
    </div>
    )
  })

  return (
    <div>
    <h1>Directors Page</h1>
    <ul>{directorsList}</ul>    
    </div>
  );
}

export default Directors
