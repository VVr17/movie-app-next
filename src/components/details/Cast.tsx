import React from 'react';
import List from '../list/List';
import InfoTitle from './components/InfoTitle';

interface CastProps {
  cast: any[];
  crew: any[];
  parentUrl: string;
}
const Cast: React.FC<CastProps> = ({ cast, crew, parentUrl }) => {
  return (
    <div className="section">
      <div className="container">
        <InfoTitle title="Cast" />
        {cast.length > 0 && (
          <List data={cast} category="cast" parentUrl={parentUrl} />
        )}

        <InfoTitle title="Crew" className="mt-4 md:mt-6 lg:mt-8" />
        {crew.length > 0 && (
          <List data={cast} category="cast" parentUrl={parentUrl} />
        )}
      </div>
    </div>
  );
};

export default Cast;
