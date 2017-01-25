import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MovieList from '../../components/MovieList';
import * as moviesSelectors from '../../stores/movies/reducer';

import { connect } from 'react-redux';

class SearchResults extends Component {

  render() {
    const { searchedFor, movies } = this.props;
    const childComponent = (!movies || movies.length === 0) 
      ? <Text style={styles.heading}>No movies of the name '{searchedFor}' were found.</Text>
      : <MovieList movies={movies} />;

    return (
      <View style={styles.container}>
        { childComponent }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchedFor: moviesSelectors.getKeyword(state),
    movies: moviesSelectors.getMovies(state)
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
