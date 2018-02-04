import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ title, time, genres, metascore }) =>
        <div key={title}>{title} -- {time} -- {genres} -- {metascore}</div>
      )}
    </div>
  );
};

export default Movies;
