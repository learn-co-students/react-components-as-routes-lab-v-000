import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(m =>(
        <div>
          <h2>{m.name}</h2>
          <p>{m.movies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Directors
