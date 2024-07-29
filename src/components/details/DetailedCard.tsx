import { Movie } from '@/types/data';
import { Genres } from '@/types/genre';
import { getCardFields } from '@/utils/helpers/getCardFields';
import React from 'react';
import CardImage from './components/CardImage';
import CardTagline from './components/CardTagline';
import CardTitle from './components/CardTitle';
import FullCharacteristics from './components/FullCharacteristics';
import InfoTitle from './components/InfoTitle';
import MainDescription from './components/MainDescription';
import ShortDescription from './components/ShortDescription';

interface CardProps {
  movie: Movie;
  category: 'movies' | 'tv';
  genres: Genres | undefined;
}

const DetailedCard: React.FC<CardProps> = ({ movie, category, genres }) => {
  const {
    title,
    imgSrc,
    subTitle,
    detailedDescription,
    detailedDescriptionTitle,
    detailedDescriptionSubTitle,
  } = getCardFields(category, movie, genres);

  return (
    <div className="section">
      <div className="container">
        <div className="tab:mb-10 md:flex md:gap-14 lg:mb-12">
          {/*  Mobile Title Render */}
          <CardTitle title={title} subTitle={subTitle} className="md:hidden" />
          <CardImage imgSrc={imgSrc} title={title} />

          <div className="w-full">
            {/* Tablet-Desktop Title render */}
            <CardTitle
              title={title}
              subTitle={subTitle}
              className="hidden md:block"
            />

            {movie?.tagline && <CardTagline tagline={movie?.tagline} />}

            <ShortDescription category={category} data={movie} />
          </div>
        </div>

        {/* Tablet / Desktop Full info render  */}
        <InfoTitle title={detailedDescriptionTitle} />
        <MainDescription
          description={detailedDescription}
          subTitle={detailedDescriptionSubTitle}
        />

        <InfoTitle title="Characteristics" />
        <FullCharacteristics data={movie} category={category} />
      </div>
    </div>
  );
};

export default DetailedCard;
