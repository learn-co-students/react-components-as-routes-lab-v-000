import React from 'react';
import { movies } from '../data';

const displayMovie = (movie) => {
  return (
    <div>
      <h3>Title: {movie.title}</h3>
      <p>Time: {movie.time} mins<br></br>
      Genres:</p>
      <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
      <br></br>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => displayMovie(movie))}
    </div>
  );
};

export default Movies;
