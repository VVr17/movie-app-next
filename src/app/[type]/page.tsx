import BreadcrumbBar from '@/components/BreadcrumbBar';
import Catalog from '@/components/catalog/Catalog';
import { notFound } from 'next/navigation';

const CatalogPage = ({ params }: { params: { type: string } }) => {
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
        ]}
      />
      <Catalog category={params.type === 'movies' ? 'movies' : 'tv'} />
    </>
  );
};

export default CatalogPage;
