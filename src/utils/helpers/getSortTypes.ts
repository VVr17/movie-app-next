import { SORT_TYPES } from '../constants';

/**
 * Retrieves an array of sort types with their corresponding values and labels.
 *
 * @returns {Array} - An array of sort type objects, each containing a value and label.
 */
export const getSortTypes = () => {
  const {
    popularityAscending,
    popularityDescending,
    releaseDateAscending,
    releaseDateDescending,
    voteAscending,
    voteDescending,
    revenueAscending,
    revenueDescending,
    byDefault,
  } = SORT_TYPES;

  return [
    {
      value: byDefault,
      label: 'By default',
    },
    {
      value: popularityAscending,
      label: 'Popularity ascending',
    },
    {
      value: popularityDescending,
      label: 'Popularity descending',
    },
    {
      value: releaseDateAscending,
      label: 'Release date ascending',
    },
    {
      value: releaseDateDescending,
      label: 'Release date descending',
    },
    {
      value: voteAscending,
      label: 'Vote ascending',
    },
    {
      value: voteDescending,
      label: 'Vote descending',
    },
    {
      value: revenueAscending,
      label: 'Revenue ascending',
    },
    {
      value: revenueDescending,
      label: 'Revenue descending',
    },
  ];
};
