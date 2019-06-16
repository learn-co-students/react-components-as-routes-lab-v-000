import React from 'react';
import { movies } from '../data';

const movieRender = () => {
  return(
  movies.map((movie, index) => (
        <div key={index}>
          <h4>{movie.title}</h4>
          <p>{movie.time}</p>
          <ul>Genres:
          {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
  )
  )
  )
}

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {movieRender()}
    </div>
  );
};

export default Movies;
