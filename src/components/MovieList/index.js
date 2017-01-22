import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import MovieItem from '../MovieItem';

export default class MovieList extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    };
  }

  rowMapper(index, row) {

  }

  render() {
  }
}