import React from 'react';
import { movies } from '../data';

const movieList = movies.map((movie, index) =>
  <div key={index} className='movie'>
  <h1> {movie.title} </h1>
    <p>{movie.time}</p>
    <p>{movie.metascore}</p>
    {movie.genres.map(genre => <p>{genre}</p>)}
  </div>
)

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
