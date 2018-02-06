import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(({name, movies}) =>
        <div key={name}>{name} -- {movies}</div>
      )}
    </div>
  );
}

export default Directors
