import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const genresList = (genres) => {
    return genres.map((genre, index) => {
      return <li key={index}>{genre}</li>;
    });
  }

  const moviesList = movies.map((movie, index) => {
    const { title, time, genres } = movie;
    return (
      <div key={index}>
        <strong>Name: {title}</strong>
        <p>Time: {time}</p>
        <p>Genres: </p>
        <ul>
          {genresList(genres)}
        </ul>
      </div>
    )
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
