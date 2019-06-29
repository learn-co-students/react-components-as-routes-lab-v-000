import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(director =>
            <div key = {director.id}>
              <h3>Name: {director.name}</h3>
              <p>Movies: {director.movies}</p><br></br>
            </div>
          )};
      <h3>Name:</h3>
      <p>Movies:</p>
    </div>
  );
}

export default Directors
