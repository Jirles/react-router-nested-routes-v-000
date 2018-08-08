import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = movies.map(movie => 
        <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      );
   
    return (
      <div>
        {renderMovies}
      </div>
    );
  };
   
  export default MoviesList;