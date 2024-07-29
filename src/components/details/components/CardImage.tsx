import fallback from '@/assets/images/movie-card-plug.jpg';
import Image from 'next/image';
import React from 'react';

interface CardImageProps {
  imgSrc: string | null;
  title: string;
}
const CardImage: React.FC<CardImageProps> = ({ imgSrc, title }) => {
  return (
    <div className="mb-4 flex h-[323px] w-auto items-center justify-center rounded-full duration-300 ease-in-out md:h-[384px] md:w-[384px]">
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={title}
          className="h-full w-full object-contain"
          width={300}
          height={100}
        />
      ) : (
        <Image
          src={fallback}
          alt={title}
          className="h-full w-full object-contain"
          width={300}
          height={100}
        />
      )}
    </div>
  );
};

export default CardImage;
