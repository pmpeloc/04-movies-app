/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { GradientBackground } from '../components/GradientBackground';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { _setColors } = useContext(GradientContext);

  const { moviesState, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500/${moviesState.nowPlaying[index].poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getColors(uri);
    _setColors({ primary, secondary });
  };

  useEffect(() => {
    if (moviesState.nowPlaying.length > 0) {
      getPosterColors(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesState.nowPlaying]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={moviesState.nowPlaying}
              renderItem={({ item }: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
        </View>
        <HorizontalSlider title="Populares" movies={moviesState.popular} />
        <HorizontalSlider title="Top Rated" movies={moviesState.topRated} />
        <HorizontalSlider title="Upcoming" movies={moviesState.upcoming} />
      </ScrollView>
    </GradientBackground>
  );
};
