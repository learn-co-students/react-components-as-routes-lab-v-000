import React from 'react';
import { actors } from '../data';

const subMarkUp = (arr) => {
  return arr.map((el, idx) => <li key={idx}>{el}</li>)
}

const markUp = () => {
  return actors.map((a, idx) => <div className="actor">{a.name}<br></br>
                                  <ul className="movies">
                                    {subMarkUp(a.movies)}
                                  </ul>
                                </div>)
}

const Actors = () => {
  return (
		<div>
			<h1>Actors Page</h1>
			{markUp()}
		</div>
  );
};

export default Actors;
