import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let list_directors = directors.map((director, index)=>
    <div className="director" key={index}>
      <h2>{director.name}</h2>
      <p>{director.movies}</p>
    </div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {list_directors}
    </div>
  );
}

export default Directors
