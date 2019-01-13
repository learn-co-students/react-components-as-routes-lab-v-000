import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, ind) => (
          <div key={ind}>
            <h3>Name: {director.name}</h3>
            <h4>Movies: </h4>
              <ul>
                {director.movies.map((movie, ind) => (
                  <li>{movie}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  );
}

export default Directors
