import React from 'react';
import { movies } from '../data';

const movie_list = movies.last

const Movies = () => {
  


  return (

    <div>
      {movie_list}
    </div>
  );
};

export default Movies;
