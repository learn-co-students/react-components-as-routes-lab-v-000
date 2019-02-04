import React from 'react';
import { movies } from '../data';
import Movie from './Movie'
const Movies = () => {

  const renderMovies = () => (
    movies.map(({title, time, genres}) => ( 
      <Movie 
        title={title}
        time={time}
        genres={genres} 
      />
    ))
  )


  return (
    <React.Fragment>
        <h1>Movies Page</h1>
        {renderMovies()}
    </React.Fragment>
  );
};

export default Movies;
