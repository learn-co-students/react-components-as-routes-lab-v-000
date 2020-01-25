import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

const renderActors = () => {
  return actors.map(a => (
    <div>
      <p>{a.name}</p>
      <p>Movies:</p>
      <ul>{a.movies.map(m => (<li>{m}</li>))}</ul>
    </div>
  ))
}

export default Actors;