import { Category } from '@/types/auxiliary';
import { Cast, Movie } from '@/types/data';
import { DESCRIPTION_TYPES } from '@/utils/constants';
import { getDescriptionFields } from '@/utils/helpers/getDescriptionFields';
import Link from 'next/link';
import React from 'react';

interface FullCharacteristicsProps {
  category: Category;
  data: Movie | Cast;
}

const FullCharacteristics: React.FC<FullCharacteristicsProps> = ({
  category,
  data,
}) => {
  const fields = getDescriptionFields(
    DESCRIPTION_TYPES.detailed,
    category,
    data,
  );

  return (
    <table className="pt-3 text-base md:block md:pb-0 md:pt-0">
      <tbody>
        {fields.map((field, index) => (
          <tr
            key={index}
            className="after:content-[' '] after:bg-dark-gray relative after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-full"
          >
            {(field.value || field.href) && (
              <>
                <td className="text-gray md:w-80">
                  <p className="pb-1 pr-2 pt-2">{field.title}</p>
                </td>

                <td className="text-sm md:w-80">
                  {field.genres &&
                    field.genres.map((genre, index) => (
                      <p className="flex gap-2 pb-1 pt-2" key={index}>
                        <Link
                          href={`/${category}?genres=${genre.id}`}
                          className="pointer underline"
                        >
                          {genre.name}
                        </Link>
                      </p>
                    ))}

                  {field.href && (
                    <a
                      href={field.href}
                      className="hover:text-yellow-light focus:text-yellow-light cursor-pointer pb-1 pt-2 underline"
                      target="_blank"
                      rel="noopener"
                    >
                      {field.value}
                    </a>
                  )}

                  {!field.href && !field.genres && (
                    <p className="pb-1 pt-2">{field.value}</p>
                  )}
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FullCharacteristics;
