import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
         <div>
            <h1>Movies Page</h1>
              {movies.map(movie => (
                <div>
              <h3> {movie.title} </h3>
              <h3> {movie.time} </h3>

              <ul>
                {movies.map((movie, index) => {
                  return <li key={index}>{movie.genres}</li>
                }) }
              </ul>
              </div>
            ))}
         </div>
 )
}


export default Movies;
