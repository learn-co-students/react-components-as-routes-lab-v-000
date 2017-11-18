import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = actors.map((actor)=>{
    return (<div>
      {actor.name} : Movies -- {actor.movies.map((movie) => movie + "  ")}
    </div>)
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
        {renderActors}
    </div>
  );
};

export default Actors;
