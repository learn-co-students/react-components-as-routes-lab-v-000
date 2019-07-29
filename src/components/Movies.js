import React from 'react';
import { movies } from '../data';

const Movies = (movies) => {
 
  return (
    <div>
      <h1>Movies Page</h1>
      movies.map(movie => {
            <div>{movie.title}</div>  
    
  }) 
  </div>
  )
}

export default Movies;
