import BreadcrumbBar from '@/components/BreadcrumbBar';
import Catalog from '@/components/catalog/Catalog';
import { fetchData } from '@/services/fetchData';
import { fetchGenres } from '@/services/fetchGenres';
import { getSearchParams, getUrl } from '@/utils/helpers/getUrl';
import { notFound } from 'next/navigation';

const CatalogPage = async ({
  params,
  searchParams,
}: {
  params: { type: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const isCorrectType = params.type === 'movies' || params.type === 'tv';

  if (!isCorrectType) {
    notFound();
  }

  const url = getUrl(params.type, searchParams);
  const queryParams = getSearchParams(params.type, searchParams);
  const response = await fetchData({ url, params: queryParams });
  const genres = await fetchGenres();

  if (!response) {
    throw new Error();
  }

  return (
    <>
      <BreadcrumbBar
        routes={[
          { path: '/', label: 'Home' },
          { path: `/${params.type}`, label: `${params.type}` },
        ]}
      />
      <Catalog
        category={params.type === 'movies' ? 'movies' : 'tv'}
        data={response}
        genres={genres}
      />
    </>
  );
};

export default CatalogPage;
