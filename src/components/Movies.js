import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <React.Fragment>
      </React.Fragment>
      <React.Fragment>
        {movies.map(movie =>
          <div>
            <h3> {movie.title} </h3>
            <p> {movie.time} minutes long </p>
            Genres:
            <ul>
              {movie.genres.map(genre =>
                <li>{genre}</li>
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default Movies;
