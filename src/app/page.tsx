import Genres from '@/components/home/MovieGenres';
import { fetchGenres } from '@/services/fetchGenres';

const Home = async () => {
  const genres = await fetchGenres();
  return (
    <>
      {genres && (
        <Genres movieGenres={genres.movieGenres} tvGenres={genres.tvGenres} />
      )}
    </>
  );
};

export default Home;
