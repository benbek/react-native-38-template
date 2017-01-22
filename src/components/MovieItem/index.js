import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const MovieItem = ({movie}) => {
  const posterSource = {
    uri: movie.poster_path
  }

  return (
    <View>
      <Text className='movie-title'>
        {movie.title}
      </Text>
      <Image className='movie-poster' source={posterSource} style={{width: 100, height: 200}}/>
    </View>
  )
}