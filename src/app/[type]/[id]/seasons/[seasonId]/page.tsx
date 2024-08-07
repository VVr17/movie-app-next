import BreadcrumbBar from '@/components/BreadcrumbBar';
import SeasonDetails from '@/components/seasons/SeasonDetails';
import { fetchDetails } from '@/services/fetchData';
import { SEASONS_URL, TV_URL } from '@/utils/constants';
import { notFound } from 'next/navigation';

const SeasonDetailPage = async ({
  params,
  searchParams,
}: {
  params: { type: string; id: string; seasonId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (params.type !== 'tv') {
    notFound();
  }

  const url = `${TV_URL}${params.id}/${SEASONS_URL}/${params.seasonId}`;
  const seasonData = await fetchDetails({ url });

  const routes = [
    { path: '/', label: 'Home' },
    {
      path: `/${params.type}`,
      label: `${params.type}`,
    },
    {
      path: `/${params.type}/${params.id}`,
      label: `${searchParams?.title}`,
    },
    {
      path: `/${params.type}/${params.id}/seasons/${params.seasonId}?last=${searchParams?.last}&title=${searchParams?.title}`,
      label: `Season ${seasonData.season_number}`,
    },
  ];

  return (
    <>
      <BreadcrumbBar routes={routes} />
      <SeasonDetails
        seasonData={seasonData}
        title={searchParams?.title as string}
        lastSeason={+(searchParams?.last || 1) as number}
      />
    </>
  );
};

export default SeasonDetailPage;
