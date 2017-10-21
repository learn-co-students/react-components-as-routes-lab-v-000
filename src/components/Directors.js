import React from 'react';
import { directors } from '../data';


const directorList = directors.map((director, index) =>
  <div>
    <ul>{director.name}</ul>
    <li>{director.movies}</li>
  </div>
)  


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
