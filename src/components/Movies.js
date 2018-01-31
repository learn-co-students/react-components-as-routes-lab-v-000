import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {
          movies.map((movie, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>title: {movie.title}</li>
                  <li>time: {movie.time}</li>
                  <li>genres: {movie.genres.join(', ')}</li>
                  <li>metascore: {movie.metascore ? movie.metascore : 'N/A'}</li>
                </ul>
              </div>
            )
          })
        }
    </div>
  );
};

export default Movies;
