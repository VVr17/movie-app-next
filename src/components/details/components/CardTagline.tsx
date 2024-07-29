import React from 'react';

interface CardTaglineProps {
  tagline: string;
}
const CardTagline: React.FC<CardTaglineProps> = ({ tagline }) => {
  return (
    <div className="mb-5 flex gap-2 md:mb-14 md:gap-4">
      <p className="text-xl text-secondary md:font-medium">{tagline}</p>
    </div>
  );
};

export default CardTagline;
