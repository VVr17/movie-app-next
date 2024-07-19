import { Movie } from '@/types/data';
import { Genres } from '@/types/genre';
import React from 'react';
import Card from './Card';

interface ListProps {
  data: Movie[];
  category: 'movies' | 'tv';
  genres: Genres | undefined;
}
const List: React.FC<ListProps> = ({ data, category, genres }) => {
  return (
    <>
      <ul className="grid grid-cols-2 bg-background sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex border border-transparent transition duration-300 hover:border-primary"
          >
            <Card movie={item} category={category} genres={genres} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
