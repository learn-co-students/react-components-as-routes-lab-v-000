import React from 'react';
import { directors } from '../data';

const Directors = () => {

  var directorsArray = [];
  for (var i = 0; i < directors.length; i++) {
    directorsArray.push(<div class="directors">  {directors[i].name} {directors[i].movies} </div>);
  }

  return (
    <div>
      <h1>Directors Page</h1>
        {directorsArray}
    </div>
  );
}

export default Directors
