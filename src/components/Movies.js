import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    { movies.map((movie, index) => {
      return (<div key={index}>
            Title: {movie.title} <br />
            Duration: {movie.time} <br />
            Genres: {movie.genres.join(', ')} <br />
            Metascore: {movie.metascore}<br /></div>);
    })}
    </div>
  );
};

export default Movies;
