import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesList = () => movies.map((movie, index) =>
                                    <div key={index}>Title: {movie.title}, Time: {movie.time} {movie.genres.map((genre, index) => <p key={index}>{genre}</p>)}
                                    </div>)
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList()}
    </div>
  );
};

export default Movies;
