import React from 'react';
import { movies } from '../data';


const movie_list = movies.map((movie, index) =>
  <div>
    <li key={index}>Name: {movie.title}</li>
    <li key={index}>Time: {movie.time}</li>
    <li key={index}>Genres: {movie.genres}</li>
  </div>  
);

const Movies = () => {
  return(

    <div>
      <h1>Movies Page</h1>
      {movie_list}
    </div>
  );
  {debugger};
};

export default Movies;
