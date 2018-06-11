import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index)=>{
        return(
          <div key={index}>
            {movie.title} - {movie.time} min
            <ul>
              {movie.genres.map((g,i)=><li key={i}>{g}</li>)}
            </ul>
          </div>
        )
        })
      }
    </div>
  );
};

export default Movies;
