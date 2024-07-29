'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useState } from 'react';
import FilterForm from './FilterForm';

const FilterDrawer = () => {
  const { retrieveSearchParams } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = !!retrieveSearchParams().search; // Disable sort if there is  a search query

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Filter button to open filter drawer */}
      <SheetTrigger
        disabled={isDisabled}
        className="flex items-center justify-center gap-4 text-base transition duration-300 hover:text-primary focus:text-primary disabled:cursor-not-allowed disabled:text-gray-400"
      >
        Filter
      </SheetTrigger>

      {/* Filter Drawer */}
      <SheetContent className="max-w-full overflow-auto">
        <SheetHeader>
          <SheetTitle className="mb-4 text-2xl font-medium text-primary md:text-3xl">
            Filter
          </SheetTitle>
        </SheetHeader>
        <FilterForm closeFilter={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;
