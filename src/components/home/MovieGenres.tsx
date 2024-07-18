import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Genre } from '@/types/genre';
import Link from 'next/link';
import React from 'react';

interface GenresProps {
  movieGenres: Genre[];
  tvGenres: Genre[];
}
const Genres: React.FC<GenresProps> = ({ movieGenres, tvGenres }) => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="relative mb-10 text-2xl uppercase text-primary md:text-4xl">
          Everything about movies and TV
        </h1>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Movies</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {movieGenres?.map(({ name, id }) => (
                  <li
                    key={id}
                    className="bg-gray group cursor-pointer rounded-lg p-0.5 duration-300 ease-in-out"
                  >
                    <Link
                      href={`/movies?genres=${id}`}
                      className="flex flex-col items-center rounded-lg border border-transparent bg-[#313035] p-2 hover:border-primary"
                    >
                      <span className="flex w-full items-center justify-center break-words py-1 group-hover:text-accent-foreground">
                        {name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">TV shows</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {tvGenres?.map(({ name, id }) => (
                  <li
                    key={id}
                    className="bg-gray hover:bg-accent-green group cursor-pointer rounded-lg p-0.5 duration-300 ease-in-out"
                  >
                    <Link
                      href={`/tv?genres=${id}`}
                      className="flex flex-col items-center rounded-lg bg-[#313035] p-2"
                    >
                      <span className="flex w-full items-center justify-center break-words py-1 group-hover:text-accent-foreground">
                        {name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Genres;
