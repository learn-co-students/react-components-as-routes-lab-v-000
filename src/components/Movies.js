import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <p>
                Title: {movie.title}<br/>
                Running time: {movie.time} minutes<br/>
                <ul>
                  {movie.genres.map(genre => <li>{genre}</li>)}
                </ul>
              </p>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
