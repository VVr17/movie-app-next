'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getSeasons } from '@/utils/helpers/getSeasons';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React, { useState } from 'react';

interface SeasonSelectProps {
  totalSeasons: number;
}
const SeasonSelect: React.FC<SeasonSelectProps> = ({ totalSeasons }) => {
  const params = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const seasons = getSeasons(totalSeasons);
  const seasonId = (params?.seasonId || '') as string;

  const [selectedValue, setSelectedValue] = useState<string>(
    seasonId || seasons[0].id,
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);

    // Replace the seasonId in the pathName with the new value
    const updatedPathName = pathName.replace(
      `/seasons/${seasonId}`,
      `/seasons/${value}`,
    );

    // Construct the updated URL with the same search parameters
    const updatedUrl = `${updatedPathName}?${searchParams.toString()}`;

    router.push(updatedUrl);
  };

  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="w-[220px] border-primary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[220px]">
        {seasons.map(({ label, id }, index) => (
          <SelectItem key={index} value={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SeasonSelect;
