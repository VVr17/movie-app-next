import fallback from '@/assets/images/movie-card-plug.jpg';
import { Category } from '@/types/auxiliary';
import { Cast, Movie } from '@/types/data';
import { Genres } from '@/types/genre';
import { getCardFields } from '@/utils/helpers/getCardFields';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  data: Movie | Cast;
  category: Category;
  genres: Genres | undefined;
  parentUrl?: string;
}
const Card: React.FC<CardProps> = ({ data, category, genres, parentUrl }) => {
  const { title, imgSrc, shortDescriptionTitle, shortDescription } =
    getCardFields(category, data, genres);

  const href =
    category === 'cast'
      ? `/${parentUrl}/${category}/${data.id}`
      : `/${category}/${data.id}`;

  return (
    <>
      <div className="flex flex-grow flex-row bg-popover md:flex-col">
        <div className="flex flex-grow flex-col p-2">
          <Link href={href} className="mb-2 h-auto w-full cursor-pointer">
            <Image
              src={imgSrc ? imgSrc : fallback}
              alt={title}
              width={200}
              height={300}
              className="h-full w-full object-contain"
            />
          </Link>

          <Link
            href={href}
            className="mb-2 flex max-w-[141px] flex-col text-xs font-medium text-primary transition duration-300 hover:text-accent-foreground focus:text-accent-foreground sm:max-w-[171px] md:max-w-[189px] md:text-sm lg:max-w-[240px]"
          >
            <span className="first-letter:capitalize"> {title}</span>
          </Link>

          <p>
            <span className="text-xs text-accent-foreground md:text-sm">
              {shortDescriptionTitle}
            </span>
            <span className="text-xxs text-white md:text-xs">
              {shortDescription}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
