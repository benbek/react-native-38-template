import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import * as moviesActions from '../../stores/movies/actions';

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.onFindMoviesClick = this.onFindMoviesClick.bind(this);
    this.state = {movieName: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.movieNameInput}
          placeholder="Type a name of a movie..."
          onChangeText={(text) => this.setState({movieName: text})}
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="Find Movies" onPress={this.onFindMoviesClick} />
      </View>
    );
  }

  async onFindMoviesClick() {
    const { dispatch, navigator } = this.props;
    if (this.state.movieName) {
      await dispatch(moviesActions.fetchMovies(this.state.movieName));
      navigator.push({
        screen: 'com.example.SearchResultsScreen'
      });
    }
  }
}

function mapStateToProps(state) {
  return {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  movieNameInput: {
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

export default connect(mapStateToProps)(WelcomeScreen);
