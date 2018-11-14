import React from 'react';
import { actors } from '../data';

const Actors = () => {
  {console.log(actors)}
  return (
   <div>
    <h1> Actors Page</h1>
        {actors.map((el, idx) =>
          <div> {el.name}
          {el.movies.map((ele, idx)=>
            <ul> {ele}</ul>
          )}
           </div>
      )}
   </div>
  );
};

export default Actors;
