import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => <div className="movie">{m.title}({m.time}min.): {m.genres.join(", ")}</div>)}
    </div>
  );
};

export default Movies;
