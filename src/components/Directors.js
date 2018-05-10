import React from 'react';
import { directors } from '../data';

const directorsdiv = directors.map((director, index)=> (
    <div className='director' key={index}>
      {director.name}
      <ul>
        {director.movies.map((movie,index)=><li key={index}>{movie}</li>)}
      </ul>
    </div>
  
  ));

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      { directorsdiv }
    </div>
  );
}

export default Directors
