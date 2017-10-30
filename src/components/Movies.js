import React from 'react';
import { movies } from '../data';

// const getChildren = (genres) => {
//   return genres.map((genre) =>
//     <ul>{genre}</ul>)
// }

const moviesList = movies.map((movie, index) => (
    <div>
      {movie.title}{movie.time}
      {genres.map((genre) =>
        <ul>{genre}</ul>)}
    </div>
  ))

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
