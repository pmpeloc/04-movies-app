import { useState, useEffect } from 'react';

import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/credits.interface';
import { MovieDetail } from '../interfaces/movie.interface';

interface MovieDetails {
  isLoading: boolean;
  movieDetail?: MovieDetail;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieDetail: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieDetail>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieDetail: movieDetailResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};
