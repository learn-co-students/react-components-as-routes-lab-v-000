import React from 'react';
import { movies } from '../data';

const createMovies = movie => {
  return(
    <div>
        <h2>Title: {movie.title}</h2>
        Time: {movie.time}<br />
        Genres:
        <ul>
          {movie.genres.map(genre => { return <li>{genre}</li> })}
        </ul>
    </div>
  )
}


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => createMovies(movie))}
    </div>
  );
};

export default Movies;
