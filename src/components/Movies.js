import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,index)=>(
        <div key={index}>
          <p>title: {movie.title}</p>
          <p>time: {movie.time}</p>
          <p>genres: {movie.genres}</p>
          <p>metascore: {movie.metascore}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default Movies;
