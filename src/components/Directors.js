import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
          {directors.map(director => {
            const movies = director.movies.map(movie => <li>{movie}</li>)
            return <div>
              <h3>Name: {director.name}</h3>
              <ul>
                {movies}
              </ul>
            </div>
          })}
    </div>
  );
}

export default Directors
