import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDetails = directors.map((director, index) => (
      <div className = "director" key={index}>
      Name: {director.name}
        <p> 
          Movies:
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
        </p>
      </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDetails}
    </div>
  );
}

export default Directors
