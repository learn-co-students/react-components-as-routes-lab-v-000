import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map((movie)=>{
    return (<div>
      {movie.title}, {movie.time}, metascore: {movie.metascore} : Genres -- {movie.genres.map((genre) => genre + "  ")}
    </div>)
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {renderMovies}
    </div>
  );
};

export default Movies;
