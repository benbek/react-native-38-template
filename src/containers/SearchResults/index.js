import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import MovieList from '../../components/MovieList';

import { connect } from 'react-redux';
import * as moviesActions from '../../stores/my-reducer/actions';

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const movieList = [
      {"backdrop_path":"/wSJPjqp2AZWQ6REaqkMuXsCIs64.jpg","belongs_to_collection":null,"budget":63000000,"poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg","release_date":"1999-10-14","status":"Released","tagline":"How much can you know about yourself if you've never been in a fight?","title":"Fight Club"}
    ];

    return (
      <MovieList movies={movieList} />
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.myReducer.name
  };
}

export default connect(mapStateToProps)(WelcomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
