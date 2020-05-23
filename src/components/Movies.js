import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesDetails = movies.map(movie =>
    <div>
      Name: {movie.title} <br></br>
      Time: {movie.time} <br></br>
      Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
    </div>
  )
  
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesDetails}
    </div>
  );
};

export default Movies;
