import { useEffect, useState } from 'react';

import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movie.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async (): Promise<void> => {
    const resp = await Promise.all([
      movieDB.get<MovieDBMoviesResponse>('/now_playing'),
      movieDB.get<MovieDBMoviesResponse>('/popular'),
      movieDB.get<MovieDBMoviesResponse>('/top_rated'),
      movieDB.get<MovieDBMoviesResponse>('/upcoming'),
    ]);
    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    moviesState,
    isLoading,
  };
};
