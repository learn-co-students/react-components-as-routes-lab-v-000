import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director =>
      	<div key={director.name}>
      	  <p><strong>Name: {director.name}</strong></p>
      	  <p>Movies:</p>
      	  <ul>
      	    {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      	  </ul>
      	</div>
      )}
    </div>
  );
}

export default Directors;

/*
// Directors component should:
// - first render render one <h1 /> with the text 'Directors Page', inside of the <div />
// - render a <div /> for each director
// - Each <div> should contain the director's name and an <ul> for each of their movies
*/