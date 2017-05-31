import React from 'react';
import data from '../data';

const Movies = () => {

  const movies = data.movies.map( (movie, index) => (
    <div key={index}>
      <h3> Title: {movie.title}</h3>
      <h3> Time: {movie.time}</h3>
      <h3> Metascore: {movie.metascore}</h3>
      <p> Movies:</p>
      <ul>
        {movie.genres.map((genre,index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  ))


  return (
    <div>
      <h1>Movies Page</h1>
      {movies}
    </div>
  );
};

export default Movies;
