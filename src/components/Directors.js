import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(
        (director, idx1) => (
          <div className="director" key={idx1}>
            <p>{director.name}</p>
            <ul>{director.movies.map( (movie, idx2) => <li key={idx2}>{movie}</li> )}</ul>
          </div>
        )
      )}
    </div>
  );
}

export default Directors;
