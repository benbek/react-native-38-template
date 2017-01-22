import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import * as moviesActions from '../../stores/my-reducer/actions';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.onFindMoviesClick = this.onFindMoviesClick.bind(this);
    this.state = {movieName: ''};
  }

  componentDidMount() {
    this.props.dispatch(moviesActions.fetchMovies('Alien'));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.welcome}
          placeholder="Type a name of a movie..."
          onChangeText={(text) => this.setState({movieName: text})}
        />
        <Text style={styles.instructions}>
          {this.props.name}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="Find Movies" onPress={this.onFindMoviesClick} />
      </View>
    );
  }

  onFindMoviesClick() {
    this.props.dispatch(moviesActions.fetchMovies(this.state.movieName));
    // this.props.navigator.push({
    //   screen: 'com.example.WelcomeScreen'
    // });
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
