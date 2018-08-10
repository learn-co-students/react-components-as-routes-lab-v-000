import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieMap = movies.map(movie => {
    return (
      <div key={movie.title} >
        <h4>{movie.title}</h4>
        <p>{movie.time}</p>
        <p>Genres:</p>
        <ul>
          {
            movie.genres.map(genre => {
              return <li key={genre}>{genre}</li>
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieMap}
    </div>
  );
};

export default Movies;
