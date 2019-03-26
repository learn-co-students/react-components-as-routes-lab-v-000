import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <h3>Name: {director.name}</h3>
          <h3>Movies: {
              director.movies.map(movie => (
                <ul>
                  <li>{movie}</li>
                </ul>
              ))
            }</h3>
        </div>) )}
    </div>
  );
}

export default Directors
