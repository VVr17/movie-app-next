import { IMAGE_BASE_URL } from '@/utils/constants';
import React from 'react';
import CardImage from '../details/components/CardImage';
import CardTitle from '../details/components/CardTitle';
import InfoTitle from '../details/components/InfoTitle';
import MainDescription from '../details/components/MainDescription';
import EpisodeList from './components/EpisodeList';
import SeasonSelect from './components/SeasonSelect';

interface SeasonDetailsProps {
  seasonData: any;
  title: string;
  lastSeason: number;
}
const SeasonDetails: React.FC<SeasonDetailsProps> = ({
  seasonData,
  title,
  lastSeason,
}) => {
  const imgSrc = seasonData?.poster_path
    ? `${IMAGE_BASE_URL}${seasonData.poster_path}`
    : null;

  return (
    <div className="section">
      <div className="container">
        <div className="md:mb-10 md:flex md:gap-14 lg:mb-12">
          {/* <!-- Mobile Title Render --> */}
          <div className="mb-3 md:hidden">
            <SeasonSelect totalSeasons={+lastSeason} />
          </div>

          <CardTitle
            title={title}
            subTitle={`Season ${seasonData.season_number}`}
            className="md:hidden"
          />
          <CardImage imgSrc={imgSrc} title={title} />

          <div className="w-full">
            {/* <!-- Tablet-Desktop Title render --> */}
            <div className="flex w-full justify-between">
              <div>
                <CardTitle
                  title={title}
                  subTitle={`Season ${seasonData.season_number}`}
                  className="hidden md:block"
                />
              </div>
              <div className="hidden md:block">
                <SeasonSelect totalSeasons={+lastSeason} />
              </div>
            </div>

            <InfoTitle title="Overview" />
            <MainDescription
              description={seasonData.overview}
              subTitle={`Air date: ${seasonData.air_date}`}
            />
          </div>
        </div>

        <InfoTitle title="Episodes" className="mb-3" />
        <EpisodeList episodes={seasonData.episodes} />
      </div>
    </div>
  );
};

export default SeasonDetails;
