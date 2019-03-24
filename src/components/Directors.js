import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}) => {
  return (
    <div>
      <header>
      	<h3>{name}</h3>
      </header>
      <p>{movies}</p>
    </div>
  );
};


const Directors = () => {
	return (
	<React.Fragment>
		<h1>Directors Page</h1>
		{directors.map(Director)}
	</React.Fragment>
	)
}

export default Directors
