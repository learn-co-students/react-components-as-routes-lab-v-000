import React from 'react';
import { movies } from '../data';

const Movie = ({ movie: { title, time, genres } }) => {
  return (
    <div className="movie">
      {title}
      {time}
      <ul>
        {genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div className="movie-entry">
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default Movies
