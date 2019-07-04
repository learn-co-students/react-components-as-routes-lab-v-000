import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map(director => {
    return (
      <div key={director.name}>
        {director.name}
        <ul>
          {director.movies.map(movie => {
            return <li>{movie}</li>
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
