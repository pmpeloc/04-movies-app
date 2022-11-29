/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

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
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieDetail.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieDetail.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Sipnosis */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Sipnosis
        </Text>
        <Text style={{ fontSize: 16 }}>{movieDetail.overview}</Text>
        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieDetail.budget, { code: 'USD' })}
        </Text>
      </View>
    </>
  );
};
