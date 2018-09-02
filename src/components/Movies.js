import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((movie, index) => (
           <div key={index}> 
            <h3>Title: {movie.title}</h3> 
            <h5>Time: {movie.time}</h5>
            <h5>Genres: 
            <ul>
            {movie.genres.map((genre, index) => 
              (<li key={index}>{genre}</li>))} 
            </ul>
            </h5>
         </div>
      ))}
    </div>
  );
};

export default Movies;
