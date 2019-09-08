import React from 'react';
import { actors } from '../data';



const renderActors = () => {
  return actors.map(actor => {
    return (
      <div>
         <h3>Name: {actor.name}</h3>
         <p>Movies:</p>
         <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
  )})
}

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {renderActors()}
    </React.Fragment>
  );
};

export default Actors;
