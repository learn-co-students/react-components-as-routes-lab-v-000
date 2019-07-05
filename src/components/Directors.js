import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map(director =>
        <div key={director.id}>
         <h3>Name: {director.name}</h3>
         <p> Movies : {director.movies}</p>
        </div>
      )};
    </div>
  );
}

export default Directors
