import React from 'react';
import { movies } from '../data';

const Movies = () => {
   movies.map(movie => <Movie Title={movie.title} Genre={movie.genre} Time={movie.time}/>)
  return (
    <React.Fragment>
    <div>
      <h1> Movies Page </h1>
      <h1>Movie Title={movie.title}</h1>

      <ul>
        <h2>Genre={movie.genre}</h2>
        <li>
          <h2>Time={movie.time}</h2>
        </li>
      </ul>
    </div>
    </React.Fragment>
  );
};

export default Movies;
