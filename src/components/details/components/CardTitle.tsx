import React from 'react';

interface CardTitleProps {
  title: string;
  subTitle: string;
  className: string;
}
const CardTitle: React.FC<CardTitleProps> = ({
  title,
  subTitle,
  className,
}) => {
  return (
    <>
      <h1
        className={`title-primary mb-2 text-2xl first-letter:capitalize ${className}`}
      >
        {title}
      </h1>
      <p className={`text-gray mb-10 text-xs md:mb-14 md:text-sm ${className}`}>
        {subTitle}
      </p>
    </>
  );
};

export default CardTitle;
