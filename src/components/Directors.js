import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) =>(
        <div key={index}>
          <h1>Name: {director.name}</h1>
          <p>Movie: {director.movies}</p>

        </div>
      ))}
    </div>
  );
}

export default Directors
