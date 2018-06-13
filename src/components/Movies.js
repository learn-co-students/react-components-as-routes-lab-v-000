import React from 'react';
import { movies } from '../data';

const listMovies = movies.map(movie => {
  return (
    <div className='movie'>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
};

export default Movies;
