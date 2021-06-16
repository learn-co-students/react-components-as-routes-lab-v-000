import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (
        <div>
          <p>{d.name}</p>
        <ul>
          {d.movies.map(m => (<li>{m}</li>))}
        </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
