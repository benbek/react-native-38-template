import { ActionTest } from 'redux-testkit';

import MockMoviesService from '../../services/fetch-movies.mock';
import * as moviesActionTypes from './action-types';
import * as moviesReducer from './reducer';

describe('Movies actions', () => {

  const MOVIE_NAME = 'Aba Ganuv';

  const actionTest = new ActionTest();
  const mockService = new MockMoviesService();
  let actions;

  beforeEach(() => {
    mockService.reset();
    actionTest.reset();
    jest.setMock('../../services/fetch-movies', mockService);
    actions = require('./actions');
  });

  it('should fetch movies', () => {
    actionTest.dispatchSync(actions.fetchMovies(MOVIE_NAME));

    expect(actionTest.getDispatched().length).toEqual(1);
    expect(actionTest.getDispatched(0).isPlainObject()).toBe(true);
    expect(actionTest.getDispatched(0).getType()).toBe(moviesActionTypes.MOVIES_FETCHED);
    expect(actionTest.getDispatched(0).getParams().movieName).toEqual(MOVIE_NAME);
    expect(actionTest.getDispatched(0).getParams().movies).toBeUndefined();
  });
});
