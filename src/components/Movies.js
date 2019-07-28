import React from 'react';
import { movies } from '../data';

const Movies = (movies) => {
  movies.map(movie => {
  return (
    <div>
      <h1>Movies Page</h1>
       
            <div>{movie.title}</div>
        
    </div>
   ) }
  );
};

export default Movies;
