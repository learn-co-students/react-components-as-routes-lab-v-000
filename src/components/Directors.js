import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div className="director">
          <p>Name: {director.name}</p>
          <p>Movies: {director.movies}</p>
        </div>
      ))}
    </div>
  );
}

export default Directors
