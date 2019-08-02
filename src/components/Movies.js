import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie) => (
          <div>
            <h3>Title: {movie.title}</h3>
            <h4>Time: {movie.time}</h4>
            <h4>Genres:</h4>
             <ul>
               {movie.genres.map((genre) => (
                 <li>{genre}</li>
               ))}
          </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
