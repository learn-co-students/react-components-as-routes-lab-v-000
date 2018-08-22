import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {generateActors()}
    </div>
  );

};

const generateActors = () => {
  return actors.map(actor => {
    return(
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>{actor.movies.map(movie => {
          return <React.Fragment><li key={movie}>{movie}</li><br /></React.Fragment>;
        })}</ul>
      </div>
    );
  });
}
export default Actors;
