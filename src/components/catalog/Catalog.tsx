/* eslint-disable no-unused-vars */
'use client';
import { fetchData } from '@/services/fetchData';
import { Movie } from '@/types/data';
import { getSearchParams, getUrl } from '@/utils/helpers/getUrl';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CatalogPagination from './CatalogPagination';
import FilterBar from './FilterBar';
import SearchForm from './SearchForm';

interface CatalogProps {
  category: 'movies' | 'tv';
}
const Catalog: React.FC<CatalogProps> = ({ category }) => {
  const queryParams = useSearchParams();
  const [data, setData] = useState<Movie[] | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      const url = getUrl(category, queryParams);
      const searchParams = getSearchParams(category, queryParams);

      const response = await fetchData({ url, params: searchParams });

      if (response) {
        setData(response.results);
      }
    };
    getMovies();
  }, [category, queryParams]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title-primary mb-6 capitalize">{category}</h1>
        <SearchForm />
        <FilterBar />

        <ul className="flex flex-wrap gap-2">
          {data?.map((movie, index, array) => (
            <li key={index} className="border border-primary p-3">
              <p>{movie?.original_title || movie?.original_name}</p>
            </li>
          ))}
        </ul>

        {/* //TODO: add, when there are no movies found        
        <h2 className="title-secondary text-xl">
          There is no movies / TV shows found on your request
        </h2>
         */}

        <CatalogPagination />
      </div>
    </div>
  );
};

export default Catalog;
