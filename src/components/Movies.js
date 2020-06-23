import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {/*{code here}*/
        movies.map((movie,idx) => (
          <div key={idx}>
            {movie.title} {movie.time}
            <ul key={idx}>
              {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
          </div>
          ))
        }
    </div>
  );
};

export default Movies;
