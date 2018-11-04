import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
         <div key={index}>
             <h3>Title: {movie.title}</h3>
             <h4>Time: {movie.time}</h4>
             <p>Genres:</p>
             <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
             </ul>
             <h4>Score: {movie.metascore}</h4>
         </div>
     ))}
    </div>
  );
};

export default Movies;
