import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(d => {return <div key={d.name}>{d.name}, {d.movies.join(" ,")}</div> })}
    </div>
  );
}

export default Directors
