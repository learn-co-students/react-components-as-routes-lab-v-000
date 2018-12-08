import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return (
      movies.map((movie, i) => {
        return (
          <div key={i} >
            <h4>{movie.title}</h4>
            <p>{movie.time}</p>
            <ul>
              {
                movie.genres.map((genre, i) => {
                  return (
                    <li key={i}>{genre}</li>
                  )
                })
              }
            </ul>
          </div>
        )
      })
    )
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
