import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map(movie => (
      <div>
        <h3>Name: {movie.title}</h3>
        <p>Length: {movie.time} minutes</p>
        <ol>
          {movie.genres.map(genre => <i>{genre} </i>)}
        </ol>
      </div>
    ))}
    </div>
  );
};

export default Movies;
