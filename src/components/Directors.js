import React from 'react';
import { directors } from '../data';

const subMarkUp = (arr) => {
  return arr.map((el, idx) => <li key={idx}>{el}</li>)
}

const markUp = () => {
  return directors.map((d, idx) => <div className="director">{d.name}<br></br>
                                  <ul className="movies">
                                    {subMarkUp(d.movies)}
                                  </ul>
                                </div>)
} 

const Directors = () => {
  return (
     <div>
      <h1>Directors Page</h1>
      {markUp()}
    </div>

	);
};

export default Directors
