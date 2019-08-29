import React from 'react';
import { directors } from '../data';
import { link } from 'fs';

const Directors = () => { 
  return (
    <div>
      <h1>Directors Page</h1>
      
      {directors.map((director, index) => (
        <div key={index}>{director.name}
          <ul>  
            {director.movies.map((movie, index) =>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
