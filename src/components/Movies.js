import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map(movie =>
    <div>
      <h3 className="movie">Name: { movie.title }</h3>
      <p>Time: { movie.time }</p>
      Genres: <ul>{movie.genres.map((genre,i) => <li key={i}>{ genre }</li>)}</ul>
    </div>
  )
  return (
    <div>
      <h1>Movies Page</h1>
      { moviesList }
    </div>
  );
};

export default Movies;
