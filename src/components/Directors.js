import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log({directors})
  return(
  <div>
    <h1>Directors Page</h1>
    {directors.map(director => {
      return<div>
        Name: {director.name}
        <p>
        Movies:</p>
         <ul>
        <li>
          {director.movies}
        </li>
      </ul>
        </div>
      })}
    </div>
  )
}

export default Directors
