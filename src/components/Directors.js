import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map(director =>
      <div>
      <h3>{director.name}</h3>
      <br/>
      {director.movies.map(movie =>
        <ul>
        {movie}
        </ul>)}
      </div>)}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
