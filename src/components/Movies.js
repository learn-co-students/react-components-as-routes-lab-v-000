import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map((movie, idx) =>
    <div key={idx}>
      <h3>{movie.title}</h3>
      <p>{movie.time} mins</p>
      <p>Genres:</p>
      <ul>
        {
          movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)
        }
      </ul>
    </div>
  )
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
