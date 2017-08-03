import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const moviez = movies.map((movie, index) => {
    return <div key={index}>{movie.title}{movie.time}{movie.genres}{movie.metascore}</div>
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {moviez}
    </div>
  );
};

export default Movies;
