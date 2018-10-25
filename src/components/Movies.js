import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return(

    <div>
    <h1>Movies Page</h1>

      {movies.map(movie =>
      <div>
      <h4>{movie.title}</h4>
      <p>{movie.time}</p>
      <ul>{movie.genres.map((genre,index) =>
        <li key={index}>{genre}</li>)}</ul>
          </div>
      )}

    </div>


)};

export default Movies;
