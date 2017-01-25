import * as types from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  movies: [],
  name: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.MOVIES_FETCHED:
      return state.merge({
        name: action.movieName,
        movies: action.movies
      });
    default:
      return state;
  }
}

// Selectors

export function getKeyword(state) {
  return state.moviesReducer.name;
}

export function getMovies(state) {
  return state.moviesReducer.movies;
}