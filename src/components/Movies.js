import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesDiv = movies.map(movie => <li>
    <div className="movie"> {movie.title} || {movie.time} <br/>
    {movie.genres.map(genre=> <h3>{genre}</h3>)}
    </div></li>)
  return (
    <div>
    <h1>Movies Page</h1>
    <ul>
    {moviesDiv}
    </ul>
    </div>
  );
};

export default Movies;
