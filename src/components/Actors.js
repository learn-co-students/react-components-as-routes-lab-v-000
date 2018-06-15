import React, { Component } from 'react';
import { actors } from '../data';

class Actors extends Component{
  render(){
    const actorList = actors.map((actor, i) =>
      <div key={i}>
        <h3>{actor.name}</h3>
        Movies:
        <ul>
          {actor.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
    return(
      <div>
        <h1>Actors Page</h1>
        {actorList}
      </div>
    )
  };
};

export default Actors;
