import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>{movie.title} - {movie.time}{movie.genres.map(genre => <li>{genre}</li>)}</div>)}

    </div>
  );
};

export default Movies;
