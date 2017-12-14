import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}) => {
  return (
    <div>
      <h2>{name}</h2>
      {movies.map(movie => <ul key={movie}>{movie}</ul>)}
  </div>
)}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =><div className="director"><Director key={director.name} name={director.name} movies={director.movies} /></div>)}
    </div>
  );
}

export default Directors
