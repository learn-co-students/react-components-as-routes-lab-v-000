import React from 'react';
import { directors } from '../data';

const card = {
  width: '400px',
  padding: '5px 15px',
  margin: '0 5px 5px',
  border: '1px solid grey',
}

const Directors = () => {
  const directorsDisplay = directors.map((director, index) => 
    <div key={index} className="card">
      Name: {director.name}
      <br />
      Movies: <ul>{director.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
    </div>
  );
  return (
    <div>
        <h1>Directors Page</h1>
        {directorsDisplay}
    </div>
  );
}

export default Directors;
