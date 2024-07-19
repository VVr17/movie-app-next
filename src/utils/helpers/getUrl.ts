import { QueryParams, SearchParams } from '@/types/queryParams';
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

function isQueryEmpty(obj: QueryParams | undefined): boolean {
  if (!obj) return true;

  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Determines the appropriate API URL based on the category and search query.
 *
 * @param {string} category - The category of the movie ("movies" or "tv").
 */
export const getUrl = (
  category: string,
  queryParams?: { [key: string]: string | string[] | undefined } | undefined,
) => {
  switch (category) {
    case CATEGORIES.movies:
      return isQueryEmpty(queryParams)
        ? TRENDING_MOVIE_URL
        : queryParams?.search
          ? SEARCH_MOVIE_BY_TITLE
          : MOVIE_DISCOVER_URL;
    case CATEGORIES.tv:
      return isQueryEmpty(queryParams)
        ? TRENDING_TV_URL
        : queryParams?.search
          ? SEARCH_TV_BY_TITLE
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
  queryParams: QueryParams | undefined,
) => {
  const params: SearchParams = {
    page: queryParams?.page ? queryParams.page : FIRST_PAGE,
  };
  if (queryParams?.sort) {
    params.sort_by = queryParams.sort;
  }
  if (queryParams?.search) {
    params.query = queryParams.search;
  }
  if (queryParams?.genres) {
    params.with_genres = Array.isArray(queryParams.genres)
      ? queryParams.genres.join('|')
      : queryParams.genres;
  }
  if (queryParams?.minYear) {
    const key =
      category === CATEGORIES.movies
        ? 'primary_release_date.gte'
        : 'first_air_date.gte';
    params[key] = `${+queryParams.minYear}-01-01`;
  }
  if (queryParams?.maxYear) {
    const key =
      category === CATEGORIES.movies
        ? 'primary_release_date.lte'
        : 'first_air_date.lte';
    params[key] = `${+queryParams.maxYear}-12-31`;
  }

  return params;
};
