import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
            <div>
              {movie.title}
              {movie.time}
              <ul>
              {movie.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
