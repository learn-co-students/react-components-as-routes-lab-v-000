import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieGenres = (movie) => movie.genres.map((genre) => <li>{genre}</li>);
  
  let movieDivs = movies.map((movie, index) =>
    <div key={index}>
      <h4>Name: {movie.title}</h4>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movieGenres(movie)}
      </ul>
    </div>
  );

  return (
    <div>
        <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
