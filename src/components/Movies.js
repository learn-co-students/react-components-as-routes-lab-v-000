import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.forEach(function(movie) {
        <div>
          <h2>movie.title</h2>
          <p>movie.time</p>
          <ul>
            <p>Genre:</p>
            {movie.genres.forEach(function(genre) {
              <li>genre</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;

//
// This component should render the text Movies Page,
// and make a new <div> for each movie. The <div> should contain the
// movie's title, time and an <ul> for each genre.
