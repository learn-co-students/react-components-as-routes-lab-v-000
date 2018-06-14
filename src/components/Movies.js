import React from 'react';
import { movies } from '../data';

const movieList = movies.map(movie => {
  return (
    <div className='movie'>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <h5>Genres</h5>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
})
const Movies = () => {
  return (
    <div className='movie'>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
