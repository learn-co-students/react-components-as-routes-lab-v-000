import React from 'react';
import { movies } from '../data';

const Movie = ( {movie: {title, time, genres}}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{time} minutes</p>
      {genres.map(genre => <ul key={genre}>{genre}</ul>)}
    </div>
)}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =><div className="movie"><Movie key={movie.name} movie={movie} /></div>)}
    </div>
  );
};

export default Movies;
