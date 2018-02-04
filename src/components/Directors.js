import React from 'react';
import { directors } from '../data';

const director = directors.map((director, index) => { 
  return <div>{director.name}{director.movies.map(movie => movie)}</div>
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors
