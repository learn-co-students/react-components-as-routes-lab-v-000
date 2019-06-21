import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, index) => {
          return <div><ul key={index}>Name: {director.name} <br /> Movies: {director.movies}</ul></div>
        }
      )
    };
    </div>
  );
}

export default Directors
