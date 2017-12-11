import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const mappedActors = actors.map(actor => {
    const movies = actor.movies.map(movie => <li>{ movie }</li>);
    return (
      <div>
        <h1>{ actor.name }</h1>
        <ul>{ movies }</ul>
      </div>
    );
  });
  return (

    <div>
      <h1>Actors Page</h1>
      { mappedActors }
    </div>
  );
};

export default Actors;
