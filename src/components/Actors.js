import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return (
    <div>
      <header>
      	<h3>{name}</h3>
      </header>
      <p>{movies}</p>
    </div>
  );
};


const Actors = () => {
	return (
	<React.Fragment>
		<h1>Actors Page</h1>
		{actors.map(Actor)}
	</React.Fragment>
	)
}

export default Actors;
