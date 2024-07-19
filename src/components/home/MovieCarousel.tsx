'use client';
import Card from '@/components/catalog/list/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Movie } from '@/types/data';
import { Genres } from '@/types/genre';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

interface MovieCarouselProps {
  movies: Movie[];
  genres: Genres;
}
const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies, genres }) => {
  return (
    <div className="section">
      <div className="container">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {movies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="basis-1/2 pl-1 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <Card movie={movie} category="movies" genres={genres} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCarousel;
