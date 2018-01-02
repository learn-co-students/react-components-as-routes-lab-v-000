import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie)=> {
          return (<div><ul>
            <li>{movie.title} </li>
            <li>{movie.time}  </li>
            <ul>{movie.genres.map((genre) => {
              return <li>{genre}</li>
            })}</ul>
            <li>{movie.metascore}</li>
          </ul></div>)
        })}
    </div>
  );
};

export default Movies;
