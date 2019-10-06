import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div key={movie.title} className="movie">
        <h2>{movie.title}</h2>
        <p>Run Time: {movie.time}</p>
        <h5>Genres</h5>
        <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
        </div>)}
    </div>
  );
};

export default Movies