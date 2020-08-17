// This component should render the text Movies Page in an <h1>, 
  // and make a new <div> for each movie. 
// The <div> should contain the movie's title, time and a <ul> with a list of its genres.
// When importing a file or library/modules:
      // If it is a default export, then don't use any braces.
      // If it is not default, then you definitely have to use curly braces. (ie. import {movies} (*see data.js file))
  // Movies
  //   ✓ should render one <h1 /> first, inside of the <div />
  //   ✓ should render 'Movies Page' inside of the <h1 />
  //   ✓ should render a <div /> for each movie
  //   ✓ should render the right content for each movie



import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {
        movies.map((movie, index) => {
          return (
            <div key={index}>
              <h3>Name: {movie.title} </h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>
                  })}
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Movies;