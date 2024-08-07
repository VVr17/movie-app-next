import React from 'react';

interface EpisodeListProps {
  episodes: any[];
}
const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <ul className="bg-main-dark-gray grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
      {episodes.map((episode) => (
        <li
          key={episode.episode_number}
          className="border-gray hover:border-yellow-light border p-2 transition duration-300"
        >
          <p className="text-accent-green mb-2">{episode.name}</p>
          <p>{episode.overview}</p>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
