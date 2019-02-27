import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m =>(
        <div>
          <h2>{m.title}</h2>
          <p>{m.time}</p>
          <p>{m.genres.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};


export default Movies;
