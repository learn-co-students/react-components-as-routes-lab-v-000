import React from 'react';
import { movies } from '../data';

const Movies = () => {
   const allMovies = movies.map((movie, index) => {
    let movieGenres = movie.genres.map((genre, ndx) => {
     return (
       <li key={ndx}>{genre}</li>
       )
    })
   
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>
        { movieGenres }
        </ul>
      </div> 
    ) 
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      { allMovies }
    </div>
  );
};

export default Movies;
