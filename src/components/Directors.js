import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map(director =>
      <div class="director">
        <h4>{director.name}</h4>
        {director.movies.map((movie, index) =>
          <li key={index}>{movie}</li>)}
      </div>)}
    </div>
  );
}

export default Directors
