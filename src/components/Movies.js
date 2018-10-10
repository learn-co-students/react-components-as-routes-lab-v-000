import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, genres}, index) => (
  <div key={index}>
    <h2>{title}</h2>
    <p>Run time: {time} minutes</p>
      <ul key={genres}><strong>Genres:</strong>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
  </div>
)

const Movies = (movie, index) => {
  return (  
    <div key={index}>
      <h1>Movies Page</h1>
      {movies.map(Movie)}
    </div>
  )
};

Movies.defaultProps = {
  title: '',
  time: 60,
  genres: []
}

export default Movies;