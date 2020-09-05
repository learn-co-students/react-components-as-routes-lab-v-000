import React from 'react';
import { actors } from '../data';
import Person from './Person';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1> {/* I think this would be better if I used an Actor component with props */}
      { actors.map( (actor, index) =>
        <div key={index}>
          <Person name={actor.name} movies={actor.movies} />
        </div>
      ) }
    </div>
  );
};

export default Actors;
