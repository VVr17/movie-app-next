'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useState } from 'react';

const FilterDrawer = () => {
  const { retrieveSearchParams } = useQueryParams();
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = !!retrieveSearchParams().search; // Disable sort if there is  a search query

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        disabled={isDisabled}
        className="flex items-center justify-center gap-4 text-base transition duration-300 hover:text-primary focus:text-primary disabled:cursor-not-allowed disabled:text-gray-400"
      >
        Filter
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;
