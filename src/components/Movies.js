import React from 'react';
import { movies } from '../data';
import genresLi from '../mappers/movies';

const Movies = () => {
  const movieDivs = movies.map(movie => {
    return (
      <div>
        {movie.title} - {movie.time} - {movie.metascore}
        <ul>
          {genresLi(movie.genres)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
};

export default Movies;
