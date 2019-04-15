import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieInfo = movies.map((movie, index) => {
    return <div key={ index }>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>{movie.genres.map((genre, index) => (
          <li key={ index }>{ genre }</li>
      ))
    }
      </ul>
    </div>
  })
  return (
    <div>
        <h1>Movies Page</h1>
        { movieInfo }
    </div>
  );
};

export default Movies;
