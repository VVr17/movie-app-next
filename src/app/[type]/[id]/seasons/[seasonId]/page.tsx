import { notFound } from 'next/navigation';

const SeasonDetailPage = ({
  params,
}: {
  params: { type: string; id: string; seasonId: string };
}) => {
  if (params.type !== 'tv') {
    notFound();
  }

  return <div>Season Detail Page</div>;
};

export default SeasonDetailPage;
