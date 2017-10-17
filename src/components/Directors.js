import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirector = directors.map((dir, i) => {

    const dirMovies = dir.movies.map((mov, i) => <li key={i}>{mov}</li>)

    return(
    <div key={i}>
      <h2>Name: {dir.name}</h2>
      <ul>
        {dirMovies}
      </ul>
    </div>
    )
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirector}
    </div>
  );
}

export default Directors


// let directors = [
//   {
//     name: 'Scott Derrickson',
//     movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
//   },
//   {
//     name: 'Mike Mitchell',
//     movies: ['Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High']
//   },
//   {
//     name: 'Edward Zwick',
//     movies: ['Jack Reacher: Never Go Back', 'Blood Diamon', 'The Siege']
//   }
// ]
