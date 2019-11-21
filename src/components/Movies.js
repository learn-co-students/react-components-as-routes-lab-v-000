import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((movie, index) =>
            <div key={index}>
              <h3>Title: {movie.title}</h3>
              <p>Running Time: {movie.time}</p>
              {movie.genres.map((genre, idx) =>
                <ul key={idx}>
                  {genre}
                </ul>
              )}
          </div>
        )}
      </div>

  );
};

export default Movies;
