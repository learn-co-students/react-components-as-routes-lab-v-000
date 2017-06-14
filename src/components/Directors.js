import React from 'react';
import { directors } from '../data';

const Directors = () => {
    let directorDivs = directors.map( director => {
        return (
            <div className="director">
                <h1>Name: {director.name}</h1>
                <p>Movies:</p>
                <ul>
                    {director.movies.map( movie => {return <li>{movie}</li>})}
                </ul>
                
            </div>
        )
    })
  return (
    <div>
    <h1>Directors Page</h1>
     {directorDivs}
      </div>
  );
}

export default Directors
