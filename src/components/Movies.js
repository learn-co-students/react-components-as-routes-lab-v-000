import React from 'react';
import { movies } from '../data';

const moviesdiv = movies.map((movie, index)=> (
    <div className='director' key={index}>
      {movie.title}, {movie.time}
      <ul>
        {movie.genres.map((genre,index)=><li key={index}>{genre}</li>)}
      </ul>
    </div>
  
  ));

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        { moviesdiv }
    </div>
  );
};

export default Movies;
