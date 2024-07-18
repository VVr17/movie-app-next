import BreadcrumbBar from '@/components/BreadcrumbBar';
import { notFound } from 'next/navigation';

const CastDetailsPage = ({
  params,
}: {
  params: { type: string; id: string; castId: string };
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
          { path: `/${params.type}`, label: `${params.type}` }, // should be dynamic depending on previous page
          {
            path: `/${params.type}/${params.id}`,
            label: `${params.type} name `,
          }, // should be dynamic depending on previous page
          { path: `/cast/${params.castId}`, label: 'Person cast name' },
        ]}
      />
      <h1> cast details page </h1>
    </>
  );
};

export default CastDetailsPage;
