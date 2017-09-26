import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map((movie, i) => (
        <div key={i}>
        <h2>Name: {movie.title}</h2>
        <h2>Time: {movie.time}</h2>
        <label>Genres:</label>
        <ul>
        {movie.genres.map((genre, i) => (
            <li key={i}>{genre}</li>
        ))}
        </ul>
        </div>
    ))}
    </div>
  );
};

export default Movies;
