import React from 'react';
import { actors } from '../data';

const Actors = () => {

  var actorsArray = [];
  for (var i = 0; i < actors.length; i++) {
    actorsArray.push(<div class="actors">  {actors[i].name} {actors[i].movies}  </div>);
  }

  return (
    <div>
      <h1>Actors Page</h1>
        {actorsArray}
    </div>
  );
};

export default Actors;
