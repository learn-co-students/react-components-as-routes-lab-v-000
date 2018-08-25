import React from 'react';
import { directors } from '../data';

// Khaled broke each director component into even smaller components so each can be handled separately

const MovieContainer = ({ children }) => (
  <ul>{ children }</ul>
);

const Movie = ({ title }) => (
  <li>{ title }</li>
);

const Director = ({name, movies}) => (
  <div>
    { name }
    <h4>Movies</h4>
    <MovieContainer>
      { movies.map(movie => <Movie title={ movie }/>) }
    </MovieContainer>
  </div>
);

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {
        directors.map(director => {
          return <Director name={ director.name } movies={ director.movies } />
        })
      }
    </div>
  );
}

export default Directors
