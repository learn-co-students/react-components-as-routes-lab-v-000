import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsHTML = directors.map(director =>
    <div key={director.name}>
      <h4>{director.name}</h4>
      <ul>
        {director.movies.map(movie =>
          <li key={movie}>{movie}</li>
        )}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsHTML}
    </div>
  );
}

export default Directors
