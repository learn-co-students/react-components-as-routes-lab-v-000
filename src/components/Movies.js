import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(movie => {
    const genreList = movie.genres.map(genre => <li>{genre}</li>)
    return(<div><h3>{movie.title}</h3><p>{movie.time}</p><ul>{genreList}</ul></div>)
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
