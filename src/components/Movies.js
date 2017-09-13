import React from 'react';
import { movies } from '../data';

const moviesData = movies.map((movie, index) => {
  return( 
    <div key={index}>
      <p>Title: {movie.title}</p>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
      {(movie.metascore) ? <p>Metascore: movie.metascore</p> : null}
    </div>
  );
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesData}
    </div>
  );
};

export default Movies;
