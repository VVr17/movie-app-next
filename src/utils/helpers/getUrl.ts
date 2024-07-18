import {
  CATEGORIES,
  FIRST_PAGE,
  MOVIE_DISCOVER_URL,
  SEARCH_MOVIE_BY_TITLE,
  SEARCH_TV_BY_TITLE,
  TRENDING_MOVIE_URL,
  TRENDING_TV_URL,
  TV_DISCOVER_URL,
} from '@/utils/constants';
import { ReadonlyURLSearchParams } from 'next/navigation';

interface SearchParams {
  [key: string]: any;
}

/**
 * Determines the appropriate API URL based on the category and search query.
 *
 * @param {string} category - The category of the movie ("movies" or "tv").
 */
export const getUrl = (
  category: string,
  queryParams: ReadonlyURLSearchParams,
) => {
  const genres = queryParams.getAll('genres');
  const search = queryParams.get('search');

  switch (category) {
    case CATEGORIES.movies:
      return search
        ? SEARCH_MOVIE_BY_TITLE
        : !genres || genres.length === 0
          ? TRENDING_MOVIE_URL
          : MOVIE_DISCOVER_URL;
    case CATEGORIES.tv:
      return search
        ? SEARCH_TV_BY_TITLE
        : !genres || genres.length === 0
          ? TRENDING_TV_URL
          : TV_DISCOVER_URL;
    default:
      return TRENDING_MOVIE_URL;
  }
};

/**
 * Constructs search parameters based on the current route's query parameters.
 *
 * @param {string} category - The category of the movie ("movies" or "tv").
 */
export const getSearchParams = (
  category: string,
  queryParams: ReadonlyURLSearchParams,
) => {
  const genres = queryParams.getAll('genres');
  const search = queryParams.get('search');
  const sort = queryParams.get('sort');
  const minYear = queryParams.get('minYear');
  const maxYear = queryParams.get('maxYear');
  const page = queryParams.get('page');

  const params: SearchParams = { page: page ? page : FIRST_PAGE };
  if (sort) {
    params.sort_by = sort;
  }
  if (search) {
    params.query = search;
  }
  if (genres) {
    params.with_genres = Array.isArray(genres) ? genres.join('|') : genres;
  }
  if (minYear) {
    const key =
      category === CATEGORIES.movies
        ? 'primary_release_date.gte'
        : 'first_air_date.gte';
    params[key] = `${+minYear}-01-01`;
  }
  if (maxYear) {
    const key =
      category === CATEGORIES.movies
        ? 'primary_release_date.lte'
        : 'first_air_date.lte';
    params[key] = `${+maxYear}-12-31`;
  }

  return params;
};
