export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  movieGenres: Genre[];
  tvGenres: Genre[];
}
