import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div><h1>Movies Page</h1>
      {movies.map((m)=> (<div key={m.title}><ul>{m.title}<li>{m.time}</li><li>{m.genres}</li><li>{m.metascore}</li></ul></div>))}
    </div>
  );
};

export default Movies;
