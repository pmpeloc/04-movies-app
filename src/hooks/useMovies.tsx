import { useEffect, useState } from 'react';

import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movie.interface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMovies = async (): Promise<void> => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMoviesInCinema(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    moviesInCinema,
    isLoading,
  };
};
