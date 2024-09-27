import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map(director => {
    return (
      <div>
         <h3>Director: {director.name}</h3>
         <p>Movies:</p>
         <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
  )})
}

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </React.Fragment>
  );
}

export default Directors
