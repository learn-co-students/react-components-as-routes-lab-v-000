import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map((director, index) => {
   let directorMovies = director.movies.map((movie, ndx) => {
     return (
       <li key={ndx}>{movie}</li>
       )
   })
  
  return (
    <div key={index}>
      <h2>{director.name}</h2>
      <ul>
      {directorMovies}
      </ul>
    </div> 
    ) 
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors;
