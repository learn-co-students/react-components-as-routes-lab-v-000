import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <div className="director" key={director.name}>
          <h2>{director.name}</h2>
          <ul><h3>Movies:</h3>
            {director.movies.map(movie =>
              <li key={movie}>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
