import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = directors.map((director)=>{
    return (<div>
      {director.name} : Movies -- {director.movies.map((movie) => movie + "  ")}
    </div>)
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors
