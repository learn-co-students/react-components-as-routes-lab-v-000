import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies Page</h1>
      { movies.map((movie, index) => (
          <div key={index}>
            <h4>{movie.title}</h4>
            <p>{movie.time} minutes</p>
            <ul>
              { movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              )) }
            </ul>
          </div>
        )
      )}
    </div>
  )
}

export default Movies;
