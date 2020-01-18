import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

const renderDirectors = () => {
  return directors.map(d => (
    <div>
      <p>Director: {d.name}</p>
      <p>Movies:</p>
      <ul>{d.movies.map(m => (<li>{m}</li>))}</ul>
    </div>
  ))
}

export default Directors
