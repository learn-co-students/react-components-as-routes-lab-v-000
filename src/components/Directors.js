import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
  		<h1>Directors Page</h1>
  		{directors.map((director, index) => (
  			<div key={index} >
  				<p>Name: {director.name}</p>
  				<p>Movies: </p>
  				<ul>
  					{director.movies.map((director, index) => (
  						<li key={index}>{director}</li>
  					))}
  				</ul>
  			</div>
  		))}
    </div>
  )
};

export default Directors
