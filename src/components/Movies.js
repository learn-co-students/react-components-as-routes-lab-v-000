import React from 'react';
import { movies } from '../data';

const Movies = () => {
  for(const movie of movies){
  return (
    <div>
        {movie.title}
        {movie.time}
      for(const genre of {movie.genres}) {
        <ul>genre</ul>
      }
    </div>
  );
}
};

export default Movies;
