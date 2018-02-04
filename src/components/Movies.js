import React from 'react';
import { movies } from '../data'; 

const movie = movies.map((movie, index) => { 
  return <div>{movie.title}{movie.time}{movie.genres.map(genre => genre)}</div>
})

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movie}
    </div>
  );
};

export default Movies;
