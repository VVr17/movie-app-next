import { GENRES_MOVIE_URL, GENRES_TV_URL } from '@/utils/constants';

import { Genre } from '@/types/genre';
import { api } from './axiosConfig';

/**
 * Fetches movies and tv genres
 */
export const fetchGenres = async () => {
  try {
    const response = await Promise.all([
      api.get(GENRES_MOVIE_URL),
      api.get(GENRES_TV_URL),
    ]);

    return {
      movieGenres: response[0].data.genres as Genre[],
      tvGenres: response[1].data.genres as Genre[],
    };
  } catch (err: any) {
    const message = err?.response?.data
      ? err.response.data.status_message
      : err.message;
    console.error('error', message);
  }
};
