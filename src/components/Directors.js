import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directors.map((director, index) => (
        <div key={index}>
          {director.name}
          {director.movies}

        </div>

      ))}
    </div>
  );
}

export default Directors
