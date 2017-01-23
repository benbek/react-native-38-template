import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SaneListView from 'react-native-sane-listview';

import MovieItem from '../MovieItem';

export default class MovieList extends Component {

  render() {
    const separatorView = (sectionID, rowID, adjacentRowHighlighted) => 
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />

    return (
      <SaneListView
        rowsById={this.props.movies}
        renderRow={(movie) => <MovieItem {...movie} />}
        renderSeparator={separatorView}
      />
    );
  }
}