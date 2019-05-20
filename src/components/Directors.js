import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1> Directors Page </h1>
      {directors.map((director, index) => (
        <div key= {index}>
          <h2> Name: {director.name}</h2>
          Movies:
            <ul>
              {director.movies.map((movie, index) =>
                <li key={index}> {movie}</li>)}
            </ul>
            Movie Count: {director.movies.length}
        </div>
      ))}
    </div>
  );
};

export default Directors
