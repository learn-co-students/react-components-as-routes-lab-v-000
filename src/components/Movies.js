import React from 'react';
import { movies } from '../data';

  const Movies = () => {
   const moviesDiv = movies.map((movie, index )=> (
     <div key={index}>
     <h2>{movie.title}</h2>
     <h3>Duration: {movie.time}</h3>
     <h3>Genres:</h3>
       {movie.genres.map((genre, index) => (<h4 key={index}>{genre}</h4>))}
     </div>
   ))
    return (
      <div>
         <h1>Movies Page</h1>
         {moviesDiv}
      </div>
    );
  };

export default Movies;
