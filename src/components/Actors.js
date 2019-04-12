import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, i) => {
        return (
          <div className="actor" key={i}>
            <h3>Name: {a.name}</h3>
            Movies: {a.movies.map((m, j)=> {
              return (
                <li key={j}>{m}</li>
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
