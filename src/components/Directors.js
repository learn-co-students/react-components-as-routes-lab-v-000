import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
        <div>
          <h4>Name:{director.name}</h4>
          <h4>Movies:</h4>
          {director.movies.map(movie =>
            <ul>
              <li>{movie}</li>
            </ul>
          )}
        </div>
        )}
    </div>
  );
}

export default Directors
