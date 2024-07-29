import React from 'react';

interface InfoTitleProps {
  title: string;
  className?: string;
}
const InfoTitle: React.FC<InfoTitleProps> = ({ title, className }) => {
  return (
    <p className={`text-xl text-primary md:mb-6 md:block ${className}`}>
      {title}
    </p>
  );
};

export default InfoTitle;
