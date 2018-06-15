import React, { Component } from 'react';
import { directors } from '../data';

class Directors extends Component{
  render(){
    const directorList = directors.map((director, i) =>
      <div key={i}>
        <h3>{director.name}</h3>
        Movies:
        <ul>
          {director.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
  )
    return(
      <div>
        <h1>Directors Page</h1>
        {directorList}
      </div>
    )
  };
};

export default Directors;
