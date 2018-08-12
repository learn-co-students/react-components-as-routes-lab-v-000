import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((act)=>{
        return(
          <div className="actor">
            <h1>{act.name}</h1>
            <ul>
              {act.movies.map((mov)=>{
                return(
                  <li>{mov}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
