import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( (movie,index) => (
        <div key={index}>
          
        </div>
      ))}
    </div>
  );
};

export default Movies;
