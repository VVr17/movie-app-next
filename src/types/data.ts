export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;

  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;

  // TvShow
  first_air_date?: string;
  original_name?: string;
  origin_country?: string[];
  name?: string;

  // Movie
  original_title?: string;
  media_type?: string;
  title?: string;
  video?: boolean;
  tagline?: string;
}

export type ApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
