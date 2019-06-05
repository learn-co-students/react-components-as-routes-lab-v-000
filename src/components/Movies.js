import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  const movieList = movies.map((movie)=>{
    return <div className="movie">{movie.title} {movie.time} {movie.genres}</div>
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
