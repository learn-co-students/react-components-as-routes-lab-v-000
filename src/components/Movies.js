import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,index) =>
        <div className="movie" key={index}>
          <h3>Name: {movie.title}</h3>
          <p>Runtime: {movie.time}</p>
          {movie.genres.map((genre,index)=>
            <p>{genre}</p>
          )}
        </div>)}
    </div>
  );
};

export default Movies;
