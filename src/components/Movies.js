import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => {return <div key={m.title}>{m.title}, {m.time}, {m.genres.join(", ")}</div>})}
    </div>
  );
};

export default Movies;
