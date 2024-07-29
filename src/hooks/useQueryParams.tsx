'use client';
import { FIRST_PAGE, SORT_TYPES } from '@/utils/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const retrieveSearchParams = () => {
    const page = +(searchParams.get('page') || FIRST_PAGE);
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const genres = searchParams.getAll('genres');
    const minYear = searchParams.get('minYear');
    const maxYear = searchParams.get('maxYear');

    return { page, search, sort, genres, minYear, maxYear };
  };

  const getPageParams = (page: number) => {
    params.set('page', page.toString());
    return `${pathName}?${params.toString()}`;
  };

  const updateSortParams = (sortValue: string) => {
    params.set('sort', sortValue);

    if (params.has('page')) {
      params.set('page', FIRST_PAGE.toString());
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  const updateSearchParams = (searchValue: string) => {
    // Clear all existing parameters
    params.forEach((_, key) => {
      params.delete(key);
    });

    if (searchValue) {
      params.set('search', searchValue); // Set only the search parameter
      params.set('sort', SORT_TYPES.byDefault); // Set sort_by to default
    } else {
      // If search is empty, remove "search" param
      params.delete('search');
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  const updateFilterParams = (data: {
    genres: number[];
    minYear: string;
    maxYear: string;
  }) => {
    const { genres, minYear, maxYear } = data;

    // Clear existing genres
    params.delete('genres');

    // Add new genres
    genres.forEach((genre) => {
      params.append('genres', genre.toString());
    });

    // Add min year release if there is a year, otherwise remove min year param
    if (minYear) {
      params.set('minYear', minYear);
    } else {
      params.delete('minYear');
    }

    // Add max year release if there is a year, otherwise remove max year param
    if (maxYear) {
      params.set('maxYear', maxYear);
    } else {
      params.delete('maxYear');
    }

    // Reset to the first page when filters are applied
    if (params.has('page')) {
      params.set('page', FIRST_PAGE.toString());
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return {
    updateSortParams,
    retrieveSearchParams,
    getPageParams,
    updateSearchParams,
    updateFilterParams,
  };
};
