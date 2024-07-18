import { notFound, redirect } from 'next/navigation';

const SeasonsPage = ({ params }: { params: { type: string; id: string } }) => {
  if (params.type !== 'tv') {
    notFound();
  }

  // Redirect to the first season
  redirect(`/tv/${params.id}/seasons/${1}`);
};

export default SeasonsPage;
