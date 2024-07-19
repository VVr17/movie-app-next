import { ApiResponse } from '@/types/data';
import { Genres } from '@/types/genre';
import { MAX_TOTAL_PAGES } from '@/utils/constants';
import React from 'react';
import CatalogPagination from './CatalogPagination';
import FilterBar from './filter/FilterBar';
import List from './list/List';
import SearchForm from './SearchForm';

interface CatalogProps {
  category: 'movies' | 'tv';
  data: ApiResponse;
  genres: Genres | undefined;
}
const Catalog: React.FC<CatalogProps> = ({ category, data, genres }) => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title-primary mb-6 capitalize">{category}</h1>
        <SearchForm />
        <FilterBar />

        {data?.results.length > 0 && (
          <List data={data.results} category={category} genres={genres} />
        )}

        {data?.results.length === 0 && (
          <h2 className="title-secondary text-xl">
            There is no movies / TV shows found on your request
          </h2>
        )}

        {data.total_pages > 1 && (
          <CatalogPagination
            totalPages={
              data.total_pages < MAX_TOTAL_PAGES
                ? data.total_pages
                : MAX_TOTAL_PAGES
            }
          />
        )}
      </div>
    </div>
  );
};

export default Catalog;
