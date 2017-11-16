import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map((movie, index)=>{
    return(
      <div key={index} className="movie">
        <h2>{movie.title}</h2>
        <h2>{movie.time}</h2>
        <ul>
          {movie.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>  
      </div>
    );
  });

  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;