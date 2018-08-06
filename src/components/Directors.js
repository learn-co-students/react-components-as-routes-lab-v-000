import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) =>
        <div className="director" key="idx">
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>
            {director.movies.map((movie, idx) =>
              <li key={idx}>{movie}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
