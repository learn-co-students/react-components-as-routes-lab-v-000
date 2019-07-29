import React from 'react';
import { movies } from '../data';

const Movies = () => {

  // return (
  //   <div>
  //     <h1>Movies Page</h1>
  //     {movies.map((movie, index) => {
  //       <React.Fragment>
  //       <div>{movie.title}</div>  
  //       <div>{movie.time}</div> 
  //       </ React.Fragment>
  //     })}
  //   </div>
  //   )
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <React.Fragment>
        <div>{movie.title}
         {movie.time}
        <ul>
          <li>{movie.genres}</li>
        </ul>
        </div> 
        </ React.Fragment>
      ))}
    </div>
    )
  }

export default Movies;
