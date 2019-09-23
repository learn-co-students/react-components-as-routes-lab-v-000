import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map((movie, id) => {

      const genres = movie.genres.map((genre, id) => {
        return <li key={id}>{genre}</li>
      })

      return (
        <div key={id}>
        {movie.title}
        {movie.time}
          <ul>
            {genres}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1> Movies Page </h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
