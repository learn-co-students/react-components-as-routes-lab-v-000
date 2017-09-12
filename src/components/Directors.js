import React from 'react';
import { directors } from '../data';

let directorsHTML = directors.map(director=>{
  return (<div>
    <h1>{director.name}</h1>
    <ul>
      {director.movies.map(movie=><li>{movie}</li>)}
    </ul>
  </div>
  );
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directorsHTML }
    </div>
  );
}

export default Directors
