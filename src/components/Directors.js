import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map((director, index)=> {
        <div key={index}>
        <h3>Director:</h3>
        <h2>{director.name}</h2>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie, index) => {
            <li key={index}>{movie}</li>
          })}
        </ul>
        </div>
      })}
    </div>
  );
}

export default Directors
