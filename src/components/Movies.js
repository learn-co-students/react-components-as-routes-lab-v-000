import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            <h3 className="movieTitle">Name: {movie.title}</h3>
            <p className="movieTime">Time: {movie.time}</p>
            <p className="genres">Genres:
              <ul>{ movie.genres.map(genre => {
                  return <li>{genre}</li>
                })}
              </ul>
            </p>
          </div>
        )
      })}
    </div>
  )
};

export default Movies;
