import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map((x, i) => {
        return (
          <div key={i} className="director"><br></br>
            <h3>Name: {x.name} </h3>
            <h4>Movies: {x.movies} </h4>            
          </div>          
        )
      })}
    </div>
  );
}

export default Directors
