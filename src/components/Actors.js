import React from 'react';
import { actors } from '../data';

const Actor = ({actor}) => {
  return (
    <div className="actor">
      <p>Name: {actor.name}</p>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx}>
          <p>Name: {actor.name}</p>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
