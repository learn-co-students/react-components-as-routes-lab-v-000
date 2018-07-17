import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const displayMovies = movies.map(movie => {
    return (
      <div className='movies'>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies}
    </div>
  );
};

export default Movies;
