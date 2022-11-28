import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Movie } from '../interfaces/movie.interface';

interface Props extends StackScreenProps<any, any> {}

export const DetailScreen = ({ route }: Props) => {
  const movie = route.params as Movie;
  console.log(movie.title);
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
