import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return movies.map(movie => {
    return (
      <div>
         <h3>{movie.title}</h3>
         <p>Run Time: {movie.time} Minutes</p>
         <p>Genres: </p>
         <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
      </div>
  )})
}

const Movies = () => {
  return (
    <React.Fragment>
        <h1>Movies Page</h1>
        {renderMovies()}
    </React.Fragment>
  );
};

export default Movies;
