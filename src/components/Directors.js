import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directors.map(d => <div className={d.name}> <h1>Name: {d.name} </h1> <h4> Movies: </h4> <ul> {d.movies.map(m => <li> {m} </li>)} </ul> </div>)}
    </div>
  );
}

export default Directors
