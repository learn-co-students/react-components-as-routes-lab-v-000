import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let director = directors.map(function(director) {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ol>
          {director.movies}
        </ol>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors
