import MovieCarousel from '@/components/home/MovieCarousel';
import Genres from '@/components/home/MovieGenres';
import { fetchData } from '@/services/fetchData';
import { fetchGenres } from '@/services/fetchGenres';
import { getUrl } from '@/utils/helpers/getUrl';

const Home = async () => {
  const url = getUrl('movies');
  const response = await fetchData({ url, params: {} });
  const genres = await fetchGenres();

  return (
    <>
      {genres && (
        <Genres movieGenres={genres.movieGenres} tvGenres={genres.tvGenres} />
      )}

      {response && genres && (
        <MovieCarousel genres={genres} movies={response.results} />
      )}
    </>
  );
};

export default Home;
