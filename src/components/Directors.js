import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}) => {
  return (
    <div key={name}>
      <h2>Name: {name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  )
}

export default Directors
