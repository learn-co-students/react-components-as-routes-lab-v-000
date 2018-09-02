import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
       <div key={index}> 
    <h3>Name: {director.name}</h3> 
    <h5>Movies:
    <ul>
    {director.movies.map((movie, index) => 
      (<li key={index}>{movie}</li>))}
      </ul>
    </h5> 
     </div>
  ))}
    </div>
  );
}

export default Directors
