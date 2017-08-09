import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map((director, i) => {
    return (
      <div key={i}>
        <p>{director.name}</p>
        <p>
          Movies:
          {director.movies.join(', ')}
        </p>
      </div>)
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
