import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       {movies.map(movie=>
       <div> 
         {movie.title}<br/>
         {movie.genres}<br/>
         {movie.time}<br/>
         {movie.metascore}
        </div> 
         )}
    </div>
  );
};

export default Movies;
