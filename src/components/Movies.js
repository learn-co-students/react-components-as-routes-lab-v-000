import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieJsx = movies.map((movie, index) => (<div key={index}>
    Title: {movie.title},
    time: {movie.time}
    <ul>{movie.genres.join(', ')}</ul>
    </div>

  )
)
  return (
    <div>
      <h1>Movies Page</h1>
      {movieJsx}
    </div>
  );
};

export default Movies;
