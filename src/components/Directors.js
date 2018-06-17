import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    	<h1>Directors Page</h1>
    	  {directors.map((director, index) => {
    		return <div key={index}>Director: {director.name}, Movies: {director.movies.join(', ')}</div>
    	})}
    </div>
  );
}

export default Directors
