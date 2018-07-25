import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        	directors.map((director, i) => (
        	<div key={i}>
              <h3>Name: {director.name}</h3>
              <p>movies: </p>
              {director.movies.map((movie, i) => (<p>{movie}</p>))}
            </div>
        	))
        }
    </div>
  );
}

export default Directors
