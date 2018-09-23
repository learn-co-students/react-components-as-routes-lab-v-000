import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1> Actors Page</h1>
      {actors.map((x, i) => {
        return (
          <div key={i} className="actor"><br></br>
            <h3>Name: {x.name} </h3>
            <h4>Movies: {x.movies} </h4>            
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
