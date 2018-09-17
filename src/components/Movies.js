import React from 'react';
import { movies } from '../data';

const Movies = () => {
let movie = movies.map(movie => <div><h2>{movie.title}</h2> Time: {movie.time} <br /> Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></div>)
  return (
    <div>
        <h1>Movies Page</h1>
        {movie}
    </div>
  );
};

export default Movies;
