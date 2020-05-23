import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsDetails = directors.map(director => 
    <div>
      Name: {director.name}<br></br>
      Movies: <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul> 
    </div>
  )


  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDetails}
    </div>
  );
}

export default Directors
