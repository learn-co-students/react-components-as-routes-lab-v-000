import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <h4>{movie.time}</h4>
          <ul>
            {movie.genres.map(genre =>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;


// This component should render the text Movies Page, and make a new <div> for each movie. The <div> should contain the movie's title, time and an <ul> for each genre.

// {
//   title: 'Doctor Strange',
//   time: 115,
//   genres: ['Action', 'Adventure', 'Fantasy'],
//   metascore: 74
// },
