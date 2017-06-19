import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div>
            <h2>{movie.title}</h2>
            Time: {movie.time} <br />
            Genres:
            <ul>
              {movie.genres.map((genre, index)=> {
                return (<li key={index}>{genre}</li>)
              }
                )
              }
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
