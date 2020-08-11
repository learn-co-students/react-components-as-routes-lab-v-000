import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => (
          <div key={idx}>
              <h3>Director: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}

export default Directors
