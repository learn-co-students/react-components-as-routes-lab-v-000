import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((movie, index) => <div key={index + 1} className='movie'>{movie.title}{movie.time}{movie.genres.map((genre, genreIndex) => <p key={genreIndex + 1}>{genre}</p>)}</div>)}
    </div>
  );
};

export default Movies;
