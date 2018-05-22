import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map((director, index) => {
    return (
      <div key={index}>
        <h2>Name: {director.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
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
