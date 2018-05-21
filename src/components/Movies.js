import React from 'react';
import {movies} from '../data';

const Movies = () => {
  let movieDisplay = movies.map((movies, index) => {
    return (
      <div key={index}>
        <strong>{movies.title}</strong>
        <p>{movies.time}</p>
        <p>{movies.metascore}</p>
        <ul>{movies.genres.map(genre => <li>{genre}</li>)}</ul>
      </div>
    )
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieDisplay}
    </div>
  );
};

export default Movies;
