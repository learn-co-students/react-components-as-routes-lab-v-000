import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies-list">
        <h1>Movies Page</h1>
          {movies.map((movie, index) =>
            <div className="movie" key={index}>
              {movie.title}: {movie.time} minutes
                <ul className="genres">
                  {movie.genres.map((m) => 
                    <li className="movie">
                      {m}
                    </li>)}
                </ul>
            </div>  
          )}
    </div>
  );
};

export default Movies;
