import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(movie => {
    const genres = movie.genres.map(genre => {
      return <li>{genre}</li>
    })
    return (
      <div>
        <strong>{movie.title}</strong><br/>
        <em>{movie.time}</em>
        <ul>
          {genres}
        </ul>
        <br /><br />
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
