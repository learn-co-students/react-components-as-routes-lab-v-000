import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(movie =>
      <div>
        Title: {movie.title}
        <br/>
        Duration: {movie.time}
        <br/>
        Genres: {movie.genres.map(genre => <ul>{genre}</ul>)}
      </div>
    )}
    </div>
  );
};

export default Movies;
