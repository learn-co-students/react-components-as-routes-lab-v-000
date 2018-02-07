import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movs = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>
          {movie.genres.map((genre, i) => (<li key={i}>{genre}</li>))}
        </ul>
        <p>Metascore: {movie.metascore}</p>
      </div>
    )
  })

  return (
    <div className="movies">
      <h1>Movies Page</h1>
        {movs}
    </div>
  );
};

export default Movies;
