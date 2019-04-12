import React from 'react';
import { directors } from '../data';

const movieList = (movies) => {
	return movies.map( movie => <li>{movie}</li>)
}

const directorDivs = (directors) => {
	return directors.map( (director, i) => {
		
		return <div className="actor" key={i}>
			<h3>{director.name}</h3>
			<ul>{movieList(director.movies)}</ul>
		</div>
	})
}

const Directors = () => {
  return (
    <div>
    	<h1>Directors Page</h1>
      	{directorDivs(directors)}
    </div>
  );
}

export default Directors
