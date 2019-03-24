import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, genres}) => {
  return (
    <div>
      <header>
      	<h3>{title}</h3>
        <span>{time}</span>
      </header>
      <p>{genres}</p>
    </div>
  );
};


const Movies = () => {
	return (
	<React.Fragment>
		<h1>Movies Page</h1>
		{movies.map(Movie)}
	</React.Fragment>
	)
}

export default Movies;
