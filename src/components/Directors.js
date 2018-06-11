import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d =>
        <div key={d.name}>
          <h2>{d.name}</h2>
          <ul>{d.movies.map(m => <li key={m}>{m}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

export default Directors
