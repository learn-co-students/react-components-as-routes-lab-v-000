import React from 'react';
import { actors } from '../data';
import Actor from './FilmWorker'

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {actors.map(a => <Actor key={a.name} name={a.name} movies={a.movies} />)}
    </React.Fragment>
  );
};

export default Actors;
