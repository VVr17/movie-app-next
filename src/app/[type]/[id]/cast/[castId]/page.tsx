import BreadcrumbBar from '@/components/BreadcrumbBar';
import DetailedCard from '@/components/details/DetailedCard';
import { fetchDetails } from '@/services/fetchData';
import { fetchGenres } from '@/services/fetchGenres';
import { Cast } from '@/types/data';
import { MOVIE_URL, PERSON_URL, TV_URL } from '@/utils/constants';
import { getCardFields } from '@/utils/helpers/getCardFields';

const CastDetailsPage = async ({
  params,
}: {
  params: { type: string; id: string; castId: string };
}) => {
  const movieUrl = `${params.type === 'movies' ? MOVIE_URL : TV_URL}${params.id}`;
  const castUrl = `${PERSON_URL}${params.castId}`;
  const movieData = await fetchDetails({ url: movieUrl });
  const castData = await fetchDetails({ url: castUrl });
  const genres = await fetchGenres();
  const { title } = getCardFields('cast', castData, genres);

  const routes = [
    { path: '/', label: 'Home' },
    {
      path: `/${params.type}`,
      label: `${params.type}`,
    },
    {
      path: `/${params.type}/${params.id}`,
      label: `${movieData?.original_title || movieData?.original_name || movieData?.name}`,
    },
    {
      path: `/${params.type}/${params.id}/cast/${params.castId}`,
      label: `${title}`,
    },
  ];

  return (
    <>
      <BreadcrumbBar routes={routes} />
      <DetailedCard category="cast" genres={genres} data={castData as Cast} />
    </>
  );
};

export default CastDetailsPage;
