import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map(movie => {
    return <div>
            <h2>Name: {movie.title}</h2>
            <h3>Time: {movie.time} minutes</h3>
            <h3>Genres:</h3>
            <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div>
  })
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
