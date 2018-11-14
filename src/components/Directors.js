import React from 'react';
import { directors } from '../data';

const Directors = () => {
  {console.log(directors)}
  return (
    <div>
    <h1 align ='center'> Directors Page </h1>
    {directors.map((el, idx) =>
      <div> {el.name}
        {el.movies.map(ele => <ul> {ele} </ul>)}
      </div>
    )}


    </div>
  );
}

export default Directors
