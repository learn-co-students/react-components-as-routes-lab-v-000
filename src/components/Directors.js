import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsList = directors.map((director) =>

    <div>
      <h3>{director.name}</h3>

      <ul>
        {director.movies.map((movie, index) =>
        <li key={index}>{movie}</li>)}
      </ul>
    </div>

  )

  return (
    <div>
      <h1>Directors Page</h1>
      { directorsList }
    </div>
  );
}

export default Directors
