import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>

      <h1>Directors Page</h1>

        {directors.map((d, index) => (
          <div key={index}>
                <h3>Name: {d.name}</h3>
                <p>Movies:</p>
                <ul>
                    {d.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
  );
}

export default Directors
