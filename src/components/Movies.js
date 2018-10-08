import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { generateMovies() }
    </div>
  )
}

function generateMovies(){
  return movies.map((movie, index) =>
      <div key={index}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
              {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
              ))}
          </ul>
      </div>
  )
}

export default Movies;
