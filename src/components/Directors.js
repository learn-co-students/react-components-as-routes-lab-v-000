import React from 'react';
import { directors } from '../data';

const Directors = () => {
	const directorShow = directors.map(director=>{
		return (
			<div>
			  <h4>Name: {director.name}</h4>
			  <p>Movies:</p> <ul>{director.movies.map(movie=>(<li>{movie}</li>))}</ul> 
		  </div>
		  )
	})
  return (
    <div>
    <h1>Directors Page</h1>
      {directorShow}
    </div>
  );
}

export default Directors
