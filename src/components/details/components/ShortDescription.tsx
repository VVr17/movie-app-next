import { Category } from '@/types/auxiliary';
import { Cast, Movie } from '@/types/data';
import { DESCRIPTION_TYPES, FIRST_SEASON } from '@/utils/constants';
import { getDescriptionFields } from '@/utils/helpers/getDescriptionFields';
import Link from 'next/link';
import React from 'react';

interface ShortDescriptionProps {
  category: Category;
  data: Movie | Cast;
}

const ShortDescription: React.FC<ShortDescriptionProps> = ({
  category,
  data,
}) => {
  const fields = getDescriptionFields(DESCRIPTION_TYPES.short, category, data);

  return (
    <ul className="flex flex-col gap-2">
      {fields.map(({ title, value, genres, hasSeasons }, index) => (
        <li className="text-gray" key={index}>
          <p className="text-gray flex gap-2">
            <span className="text-s first-letter:capitalize md:text-base">
              {title}
            </span>
            {genres ? (
              genres.map((genre, index) => (
                <span key={index} className="flex gap-2">
                  <Link
                    href={`/${category}?genres=${genre.id}`}
                    className="pointer underline md:text-base"
                  >
                    {genre.name}
                  </Link>
                </span>
              ))
            ) : (
              <span className="md:text-base">
                {value}
                {hasSeasons && (
                  <Link
                    href={`/${category}/${data.id}/seasons/${FIRST_SEASON}?last=${value}&title=${data.original_name || data.name}`}
                    className="pointer underline"
                  >
                    ( Learn more... )
                  </Link>
                )}
              </span>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ShortDescription;
