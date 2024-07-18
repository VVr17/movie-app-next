'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getSortTypes } from '@/utils/helpers/getSortTypes';
import { useState } from 'react';

const Sort = () => {
  const types = getSortTypes();
  const [selectedValue, setSelectedValue] = useState<string>(types[0].value);

  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
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
