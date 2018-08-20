import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map( (movie, index) => (
        <div className={movie} key={index}>
          <p>Name: {movie.title}</p>
          <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map( (genre, index) => (
                <li key={index}>
                  {genre}
                </li>
              ))}
            </ul>
            <p>Metascore: {movie.metascore}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
