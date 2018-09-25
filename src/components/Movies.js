import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(movie =>
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.time}</p>
            <p>{movie.genres.join(', ')}</p>
          </div>
        )}
    </div>
  );
};

export default Movies;
