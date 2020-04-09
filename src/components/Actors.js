import React from 'react';
import { actors } from '../data';

const listActors = () => {
  return actors.map(({name, movies}) => (
    <div key={name}>
      {name}
      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ));
};

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {listActors()}
    </div>
  );
};

export default Actors;
