import React from 'react';
import { actors } from '../data';

let allMovies = this.props.actors.map((actor, index) => <li key={index}>{actor.movie}</li>);

let allActors = this.props.actors.map((actor, index) =>
  <div className="actor">
  <h2>actor.name</h2>
  <ul>
    <p>Movies:</p>
      <ul> { allMovies } </ul>
  </div>
);

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
        { allActors }
    </div>
  );
};

export default Actors;

// This component should render the text Actors Page, and make a new <div> for each actor.
// The <div> should contain the actor's name and an <ul> for each of their movies.
