import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const listMovies = movies.map(movie =>
    <div>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      Genres:<ul>
        {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
  );

  return (
    <div>
    <h1>Movies Page</h1>
        {listMovies}
    </div>
  );
};

export default Movies;
