import { Category } from '@/types/auxiliary';
import { Cast, Movie } from '@/types/data';
import { Genres } from '@/types/genre';
import React from 'react';
import Card from './Card';

interface ListProps {
  data: Movie[] | Cast[];
  category: Category;
  genres?: Genres | undefined;
  parentUrl?: string;
}
const List: React.FC<ListProps> = ({ data, category, genres, parentUrl }) => {
  return (
    <ul className="grid grid-cols-2 bg-background sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item) => (
        <li
          key={item.id}
          className="flex border border-transparent transition duration-300 hover:border-primary"
        >
          <Card
            data={item}
            category={category}
            genres={genres}
            parentUrl={parentUrl}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
