import React from 'react';
import { movies } from '../data';

const Movies = () => {

  var moviesArray = [];
  for (var i = 0; i < movies.length; i++) {
    moviesArray.push(<div class="movies">  {movies[i].title} {movies[i].time} {movies[i].genres} </div>);
  }

  return (
    <div>
        <h1>Movies Page</h1>
          {moviesArray}
    </div>
  );
};

export default Movies;
