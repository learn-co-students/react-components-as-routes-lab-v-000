import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const displayActors = () => {
    return actors.map(({name,movies}, index) => {
      return (<div key={index}>
        <h2>{name}</h2>
        <ul>
          {movies.map((movie,index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>)
    })
  }
  return (
    <div>
      {displayActors()}
    </div>
  );
};

export default Actors;
