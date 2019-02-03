import React from 'react';
import { movies } from '../data'; // movies is an array of movie objects

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div key={movie.title}>
          <p><strong>Name: {movie.title}</strong></p>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;

/*
// Movies component should:
// - first render one <h1 /> with the text 'Movies Page' inside of the <div /> 
// - render a <div /> for each movie
// - Each <div> should contain the movie's title, time and an <ul> for each genre
*/