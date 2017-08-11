import React from 'react';
import { movies } from '../data';


const movieList = movies.map((movie, index) => {
	return <div key={index}>{movie.title} {movie.time} {movie.genres}</div>
})


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
