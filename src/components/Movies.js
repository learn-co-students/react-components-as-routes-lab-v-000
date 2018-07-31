import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h3>Title: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Metascore: {movie.metascore}</p>
        <h4>Genres:</h4>
        <ul>
          {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
