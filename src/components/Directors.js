import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map(d => <div>
        <h2>{d.name}</h2>
        <h3>Movies</h3>
        {d.movies.map((movie, idx) => <ul>
                                      <li key={idx}>{movie}</li>
                                      </ul>)}
        </div>)}
    </div>
  );
}

export default Directors
