import React from 'react';
import { connect } from 'react-redux';
 
const MoviesShow = ({movie}) => {
 
  return (
    <div>
      <h3>Title: {movie.title}</h3>
    </div>
  );
}

const mapStatetoProps = (state, ownProps) => {
    const movie = state.movies.find(movie => movie.id === parseInt(ownProps.match.params.movieId, 10))
 
  if (movie) {
    return { movie }
  } else {
    return { movie: {} }
  }
}
 
export default connect(mapStatetoProps)(MoviesShow);