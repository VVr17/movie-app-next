'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQueryParams } from '@/hooks/useQueryParams';
import { getSortTypes } from '@/utils/helpers/getSortTypes';

import { useEffect, useState } from 'react';

const Sort = () => {
  const types = getSortTypes();
  const { updateSortParams, retrieveSearchParams } = useQueryParams();

  const [selectedValue, setSelectedValue] = useState<string>(types[0].value);
  const isDisabled = !!retrieveSearchParams().search; // Disable sort if there is  a search query

  const handleSortChange = (value: string) => {
    setSelectedValue(value);
    updateSortParams(value);
  };

  useEffect(() => {
    const { sort } = retrieveSearchParams();
    if (sort) {
      setSelectedValue(sort);
    }
  }, [retrieveSearchParams]);

  return (
    <Select
      disabled={isDisabled}
      value={selectedValue}
      onValueChange={handleSortChange}
    >
      <SelectTrigger className="w-[220px] border-primary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[220px]">
        {types.map(({ label, value }, index) => (
          <SelectItem key={index} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
