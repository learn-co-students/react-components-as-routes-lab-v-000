import React from 'react';
import { movies } from '../data';

const movieContainers = (movies) => {
  movies.forEach(movie => {
    <div>
      <strong>Name: {movie.title} </strong>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
        movie.genres.forEach(genre => {
          <li>{movie.genre}</li>
        }
      </ul>
    </div>
  })
}


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,index)=> (
        <div key={index}>
          <strong>Name:  {movie.title}</strong>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
