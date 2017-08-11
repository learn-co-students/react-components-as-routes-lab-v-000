import React from 'react';
import { directors } from '../data';


const directorList = directors.map((director, index) => {
	return <div key={index}>{director.name} {director.movies}</div>
})


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
