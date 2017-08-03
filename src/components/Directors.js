import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorz = directors.map((director, index) => {
    return <div key={index}>{director.name}{director.movies}</div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorz}
    </div>
  );
}

export default Directors
