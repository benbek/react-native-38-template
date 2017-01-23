import { Navigation } from 'react-native-navigation';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { registerScreens } from './containers';
import * as reducers from './stores/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export function start() {
  registerScreens(store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'com.example.WelcomeScreen',
        label: 'Search Movies',
        icon: require('../img/tmdb.png')
      }
    ]
  });
}
