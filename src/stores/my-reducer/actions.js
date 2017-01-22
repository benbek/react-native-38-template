import * as types from './action-types';
import moviesService from '../../services/fetch-movies';

export function fetchMovies(movieName) {
  return async (dispatch, getState) => {
    try {
      const res = await moviesService.getMoviesByName(movieName);
      console.log(res);
      dispatch({ type: types.MOVIES_FETCHED, movies });
    } catch (e) {
      console.error(e);
    }
    
  }
}
