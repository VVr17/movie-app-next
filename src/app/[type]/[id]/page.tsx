import BreadcrumbBar from '@/components/BreadcrumbBar';
import { notFound } from 'next/navigation';

const MovieDetailsPage = ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  const isCorrectType = params.type === 'movies' || params.type === 'tv';

  if (!isCorrectType) {
    notFound();
  }

  return (
    <>
      <BreadcrumbBar
        routes={[
          { path: '/', label: 'Home' },
          { path: `/${params.type}`, label: `${params.type}` },
          {
            path: `/${params.type}/${params.id}`,
            label: `${params.type} show name`,
          },
        ]}
      />
      <h1> {params.type} Details Page</h1>
    </>
  );
};

export default MovieDetailsPage;
