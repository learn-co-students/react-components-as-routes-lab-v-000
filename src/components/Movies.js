import React from 'react';
import { movies } from '../data';

const Movies = () => {
    return (
      <div>
          <h1>Movies Page</h1>
            {movies.map(movie => {
              const genres = movie.genres.map(genre => <li>{genre}</li>)
              return <div>
                <h3>Name: {movie.title}</h3>
                <p>Time: {movie.time}</p>
                <ul>
                  {genres}
                </ul>
              </div>
            })}
      </div>
    );
};

export default Movies;
// This component should render the text Movies Page,
// and make a new <div> for each movie.
// The <div> should contain the movie's title, time and an <ul> for each genre.
