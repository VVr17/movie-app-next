'use client';
import { FIRST_PAGE } from '@/utils/constants';
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

    return { page, search, sort, genres };
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

  return { updateSortParams, retrieveSearchParams, getPageParams };
};
