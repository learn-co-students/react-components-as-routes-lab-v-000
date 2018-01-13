import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {return <div key={index}>
        Name: {director.name}
        Movies:
        <ul>
          {director.movies.map((movie, index) => {
            return <li>{movie}</li>
          })}
        </ul>
        </div>})}
    </div>
  );
}

export default Directors
