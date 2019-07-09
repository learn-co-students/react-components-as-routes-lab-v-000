import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map((movie) => 
        <div className = 'movie' >
            <h2>{movie.title}</h2>
            <h3>{movie.time} minutes</h3>
            <h3>Genres: {movie.genres.map((genre) =>
              <ul> {genre} </ul>)}</h3>
        </div>
        )}
    </div>
  );
};

export default Movies;
