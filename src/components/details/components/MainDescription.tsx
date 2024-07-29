import React from 'react';

interface MainDescriptionProps {
  subTitle: string;
  description: string;
}

const MainDescription: React.FC<MainDescriptionProps> = ({
  description,
  subTitle,
}) => {
  return (
    <div className="pb-10 pt-3 md:mb-12 md:block md:pb-0 md:pt-0">
      <p className="mb-2 text-base text-white transition duration-300">
        {subTitle}
      </p>
      <p className="text-sm font-normal text-white">{description}</p>
    </div>
  );
};

export default MainDescription;
