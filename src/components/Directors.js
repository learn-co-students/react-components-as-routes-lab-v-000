import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div><h1>Directors Page</h1>
      {directors.map((d)=> (<div key={d.name}><ul>{d.name}<li>{d.movies}</li></ul></div>))}
    </div>
  );
}

export default Directors
