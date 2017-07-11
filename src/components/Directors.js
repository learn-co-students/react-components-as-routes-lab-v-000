import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let list_directors = directors.map((director)=>
    <div className="director">
      <h2>{director.name}</h2>
      {director.movies}
    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {list_directors}
    </div>
  );
}

export default Directors
