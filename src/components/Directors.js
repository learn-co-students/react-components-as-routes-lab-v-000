import React from 'react';
import { directors } from '../data';

const Director = (name) => {
    <div> {name} </div>
}

const renderDirectors = (directors) => {
    return directors.map(dir => {
        return <div>
                <ul>
                    <h4>Name: {dir.name}</h4>
                    <h5>Movies:</h5>
                    <p>{dir.movies}</p>
                </ul>
        </div>
    })

}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors(directors)}
    </div>
  );
}

export default Directors
