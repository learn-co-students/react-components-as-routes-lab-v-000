import React from 'react';
import { movies } from '../data';

const Movies = () => {

  var moviesDiv = movies.map(movie => {
    var genres = movie.genres.map(genre => { return <li>{genre}</li>})
    return (<div>{movie.title}
              <p>{movie.time}</p>
              <ul>{genres}</ul>
            </div>)
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {moviesDiv}
    </div>
  );
};

export default Movies;
