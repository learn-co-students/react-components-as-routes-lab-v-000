import React from 'react';
import { actors } from '../data';


const createActors=()=>{
    return actors.map(a=>{
      return(
        <div>
          {a.name }
          <ul>
            {a.movies.map(m=>{
            return  <li>{m}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  const movies=()=>{
    return actors.movies.map(m=>{
    return(<li>{m}</li>)
    })
  }


const Actors = () => {


  return (
    <div>
    <h1> Actors Page</h1>
    {createActors()}
    </div>
  );
};

export default Actors;
