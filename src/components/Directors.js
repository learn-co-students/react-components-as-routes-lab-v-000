import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map((director)=>{
    return <div className="director">{director.name} {director.movies}</div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
