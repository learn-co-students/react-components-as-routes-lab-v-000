import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsList = directors && directors.map((director, i) =>
    <div key={i}>
      Name: {director.name}
      <br></br>
      Movies: {director.movies}
      <br></br>
      <br></br>
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
        {directorsList}
    </div>
  );
}

export default Directors
