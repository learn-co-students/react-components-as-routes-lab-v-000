import React from 'react';
import { directors } from '../data';

const directorList = directors.map(director =>{
  const movies = director.movies.map(movie =>
  <ul>{movie}</ul>
  )
  return <div>
    <h3>{director.name}</h3>
    {movies}
  </div>;
})

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
