import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map(director => (
      <div>
        <h1>{director.name}</h1>
        <ol>
          {director.movies.map(movie => <h5>{movie}</h5>)}
        </ol>
      </div>
    ))}
    </div>
  );
}

export default Directors
