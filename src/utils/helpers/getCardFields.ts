import { Category } from '@/types/auxiliary';
import { Genre } from '@/types/genre';
import { CATEGORIES, IMAGE_BASE_URL } from '../constants';

/**
 * Custom composition function for generating card fields based on the category and data.
 *
 * @param {string} category - The category of the data (either "movies", "tv", "people").
 * @param {Object} data - The  data object containing relevant information.
 * @returns {Object} - An object containing computed card fields.
 */
export const getCardFields = (
  category: Category,
  data: any,
  genres:
    | {
        movieGenres: Genre[];
        tvGenres: Genre[];
      }
    | undefined,
) => {
  const imgSrc = data?.poster_path
    ? `${IMAGE_BASE_URL}${data.poster_path}`
    : data?.profile_path
      ? `${IMAGE_BASE_URL}${data.profile_path}`
      : null;

  const title = data?.original_title || data?.original_name || data?.name;
  const subTitle =
    category === CATEGORIES.cast
      ? `Popularity: ${data?.popularity}`
      : `Status: ${data?.status}`;

  const chosenGenres =
    category === CATEGORIES.movies ? genres?.movieGenres : genres?.tvGenres;

  const shortDescriptionTitle = data?.character
    ? 'Character: '
    : data?.job
      ? 'Job: '
      : 'Genres: ';

  const shortDescription = data?.character
    ? data?.character
    : data?.job
      ? data.job
      : chosenGenres
          ?.filter(({ id }) => data?.genre_ids?.includes(id))
          .map(({ name }) => name)
          .join(', ');

  const detailedDescriptionTitle =
    category === CATEGORIES.cast ? 'Biography' : 'Overview';

  const detailedDescriptionSubTitle =
    category === CATEGORIES.cast
      ? `Known for department: ${data?.known_for_department}`
      : `Genres: ${data?.genres?.map(({ name }: { name: string }) => name).join(', ')}`;

  const detailedDescription = data?.overview || data?.biography;

  return {
    category,
    imgSrc,
    title,
    subTitle,
    shortDescriptionTitle,
    shortDescription,
    detailedDescriptionTitle,
    detailedDescriptionSubTitle,
    detailedDescription,
  };
};
