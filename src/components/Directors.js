import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((dir, idx) => {
        return <div key={idx}>
          <h3>{dir.name}</h3>
          <ul>
            {dir.movies.map(mov => <li>{mov}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
