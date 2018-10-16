import React from 'react';
import { movies } from '../data';

const data = () => {
  return movies.map(function (movie) {
    return <div key={movie.title}><h3>{movie.title}</h3><p>Time: {movie.time}</p><p>Genres</p><ul>{genres(movie.genres)}</ul></div>
  })
}

const genres = (array) => {
  return array.map(function (genre) {
    return <li key={genre}>{genre}</li>
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page!</h1>
        {data()}
    </div>
  );
};

export default Movies;
