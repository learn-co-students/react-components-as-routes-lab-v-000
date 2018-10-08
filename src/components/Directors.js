import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (

    <div>
      <h1>Directors Page</h1>
      { generateDirectors() }
    </div>
  );
}

function generateDirectors(){
  return directors.map((director, index) =>
      <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>
              {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
              ))}
          </ul>
      </div>
  )
}

export default Directors
