import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

const renderMovies = () => {
  return movies.map(m => (
    <div>
      <p>Title: {m.title}</p>
      <p>Time: {m.time}</p>
      <p>Genres:</p>
      <ul>{m.genres.map(g => (<li>{g}</li>))}</ul>
    </div>
  ))
}

export default Movies;