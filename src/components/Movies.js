import React from 'react';
import { movies } from '../data';

console.log(movies)

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, key) => {
          return <div>
              {movie.title}
              <br />
              Time: {movie.time}
              <br />
              Genres: {movie.genres.map((genre, key) => <span key={key}>{genre} </span>) }
          </div>
        })}
    </div>
  );
};

export default Movies;
