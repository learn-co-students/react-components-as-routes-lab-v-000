import React from 'react';
import { movies } from '../data';

const card = {
  width: '400px',
  padding: '5px 15px',
  margin: '0 5px 5px',
  border: '1px solid grey',
}

const Movies = () => {
  const moviesDisplay = movies.map((movie, index) => 
    <div key={index} className="card">
      Title: {movie.title}
      <br />
      Time: {movie.time}
      <br />
      Genres: <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
    </div>
  );
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesDisplay}
    </div>
  );
};

export default Movies;
