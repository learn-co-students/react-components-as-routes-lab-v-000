import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map(movie => {
  const moviesGenres = movie.genres.map(genre => <li>{genre}
  </li>)
  return (
  <div className='movie'>
    <h2>{movie.title}</h2>
    <h3>Time: {movie.time}</h3>
    <h3>Genres:</h3><br />
    <ul>{moviesGenres}</ul>
    <h3>Metascore: {movie.metascore}</h3>
  </div>
  );
});

return(
  <div>
    <h1>Movies Page</h1>
    <ul>{moviesList}</ul>
  </div>
  )
};

export default Movies;
