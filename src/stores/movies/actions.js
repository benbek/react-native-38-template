import * as types from './action-types';
import moviesService from '../../services/fetch-movies';

export function fetchMovies(movieName) {
  return async (dispatch, getState) => {
    try {
      const movies = await moviesService.getMoviesByName(movieName);
      dispatch({ 
        type: types.MOVIES_FETCHED, 
        movieName, 
        movies
      });
    } catch (e) {
      console.error(e);
    }
    
  }
}
