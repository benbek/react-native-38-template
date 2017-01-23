import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MovieList from '../../components/MovieList';

import { connect } from 'react-redux';

class SearchResults extends Component {

  render() {
    const { searchedFor, movies } = this.props;

    return (
      <View style={styles.container}>
        <MovieList movies={movies} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchedFor: state.moviesReducer.name,
    movies: state.moviesReducer.movies
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    width: 300,
    textAlign: 'center',
    margin: 10,
  },
  footer: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps)(SearchResults);
