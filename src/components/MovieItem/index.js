import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


const MovieItem = ({title, posterPath}) => {
  const posterSource = {
    uri: posterPath
  }

  return (
    <View style={styles.item}>
      <Text className="movie-title" style={styles.title}>
        {title}
      </Text>
      <Image className="movie-poster" source={posterSource} style={styles.poster} />
    </View>
  )
}

MovieItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  posterPath: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  title: {
    flex: 1,
    fontSize: 22,
  },
  poster: {
    width: 100,
    height: 200,
  }
});

export default MovieItem;