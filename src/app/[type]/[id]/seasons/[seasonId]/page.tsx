import { notFound } from 'next/navigation';

const SeasonDetailPage = ({
  params,
  searchParams,
}: {
  params: { type: string; id: string; seasonId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  console.log('params - seasons', params);
  console.log('searchParams-seasons', searchParams);

  if (params.type !== 'tv') {
    notFound();
  }

  return <div>Season Detail Page</div>;
};

export default SeasonDetailPage;
