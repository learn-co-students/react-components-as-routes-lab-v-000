import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => (
          <div key={idx}>
            <h2>{movie.title}</h2>
            <h4>Time: {movie.time}</h4>
            <h4>Genres:</h4>
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