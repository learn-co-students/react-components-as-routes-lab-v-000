import React from 'react';
import { movies } from '../data';


const createMovies = ()=>{
  return movies.map(m=>{
  return(  <div>
      {m.title}
      {m.time}
      <ul>
      {m.genres.map(g=>{
        return(<li>{g}</li>)
      })}
      </ul>
    </div>)
  })
}


const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {createMovies()}
    </div>
  );
};

export default Movies;
