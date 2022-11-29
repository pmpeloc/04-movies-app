import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MovieDetail } from '../interfaces/movie.interface';
import { Cast } from '../interfaces/credits.interface';

interface Props {
  movieDetail: MovieDetail;
  cast: Cast[];
}

export const MovieDetails = ({ movieDetail, cast }: Props) => {
  return (
    <>
      {/* Details */}
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieDetail.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieDetail.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>
    </>
  );
};
