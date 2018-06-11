import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie =>
          <div key={movie.title}>
            <h2>Title: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <ul>Genre: {movie.genres.map(g => <li key={g}>{g}</li>)}</ul>
          </div>)}
    </div>
  );
};

export default Movies;
