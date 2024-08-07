/* eslint-disable no-unused-vars */
import BreadcrumbBar from '@/components/BreadcrumbBar';
import Cast from '@/components/details/Cast';
import DetailedCard from '@/components/details/DetailedCard';
import { fetchCast, fetchDetails } from '@/services/fetchData';
import { fetchGenres } from '@/services/fetchGenres';
import { Category } from '@/types/auxiliary';
import { Movie } from '@/types/data';
import {
  CREDIT_URL,
  MAX_CAST,
  MAX_CREW,
  MOVIE_URL,
  TV_URL,
} from '@/utils/constants';
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
  const credits = await fetchCast({ url: `${url}/${CREDIT_URL}` });
  const genres = await fetchGenres();
  const { title } = getCardFields(params.type as Category, movieData, genres);

  const routes = [
    { path: '/', label: 'Home' },
    { path: `/${params.type}`, label: `${params.type}` },
    {
      path: `/${params.type}/${params.id}`,
      label: `${title}`,
    },
  ];
  return (
    <>
      <BreadcrumbBar routes={routes} />
      <DetailedCard
        category={params.type as 'movies' | 'tv'}
        genres={genres}
        data={movieData as Movie}
      />

      {credits && (
        <Cast
          parentUrl={`${params.type}/${params.id}`}
          cast={
            credits.cast <= MAX_CAST
              ? credits.cast
              : credits.cast.splice(0, MAX_CAST)
          }
          crew={
            credits.crew <= MAX_CREW
              ? credits.crew
              : credits.crew.splice(0, MAX_CREW)
          }
        />
      )}
    </>
  );
};

export default MovieDetailsPage;
