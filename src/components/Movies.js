import React from 'react';
import { movies } from '../data';

const listItems = movies.map((movie, index) =>
  <div key={index}>
    <h3>{movie.title}</h3>
    <p>{movie.time}</p>
    <ul>{movie.genres.map((genre, ind) =>
      <li key={ind}>{genre}</li>
      )}
    </ul>
  </div>
)

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {listItems}
    </div>
  );
};

export default Movies;
