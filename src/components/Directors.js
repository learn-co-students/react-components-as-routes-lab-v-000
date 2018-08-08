import React from 'react';
import { directors } from '../data';

const directorCards = 
  directors.map(director => {
    return(
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        Movies:
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
  )}
)

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorCards}
    </div>
  );
}

export default Directors
