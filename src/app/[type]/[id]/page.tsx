/* eslint-disable no-unused-vars */
import BreadcrumbBar from '@/components/BreadcrumbBar';
import DetailedCard from '@/components/details/DetailedCard';
import { fetchDetails } from '@/services/fetchData';
import { fetchGenres } from '@/services/fetchGenres';
import { Movie } from '@/types/data';
import { MOVIE_URL, TV_URL } from '@/utils/constants';
import { getCardFields } from '@/utils/helpers/getCardFields';
import { notFound } from 'next/navigation';

const MovieDetailsPage = async ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  const isCorrectType = params.type === 'movies' || params.type === 'tv';

  if (!isCorrectType) {
    notFound();
  }

  const url = `${params.type === 'movies' ? MOVIE_URL : TV_URL}${params.id}`;
  const movieData = await fetchDetails({ url });
  const genres = await fetchGenres();
  const { title } = getCardFields(
    params.type as 'movies' | 'tv',
    movieData,
    genres,
  );

  return (
    <>
      <BreadcrumbBar
        routes={[
          { path: '/', label: 'Home' },
          { path: `/${params.type}`, label: `${params.type}` },
          {
            path: `/${params.type}/${params.id}`,
            label: `${title}`,
          },
        ]}
      />
      <DetailedCard
        category={params.type as 'movies' | 'tv'}
        genres={genres}
        movie={movieData as Movie}
      />
    </>
  );
};

export default MovieDetailsPage;
