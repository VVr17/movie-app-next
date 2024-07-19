'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FIRST_PAGE } from '@/utils/constants';
import React from 'react';

interface PaginationProps {
  totalPages: number;
}

const CatalogPagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { getPageParams, retrieveSearchParams } = useQueryParams();
  const activePage = retrieveSearchParams().page;

  const renderPageItems = () => {
    const pages = [];
    const startEllipsis = activePage > 3;
    const endEllipsis = activePage < totalPages - 2;

    if (startEllipsis) {
      pages.push(
        <PaginationItem key={FIRST_PAGE}>
          <PaginationLink
            href={getPageParams(FIRST_PAGE)}
            isActive={FIRST_PAGE === activePage}
          >
            {FIRST_PAGE}
          </PaginationLink>
        </PaginationItem>,
      );
      pages.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    for (
      let i = Math.max(1, activePage - 1);
      i <= Math.min(totalPages, activePage + 1);
      i++
    ) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={getPageParams(i)} isActive={i === activePage}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endEllipsis) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>,
      );
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={getPageParams(totalPages)}
            isActive={totalPages === activePage}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              activePage === 1
                ? 'pointer-events-none border-gray-400 text-gray-400'
                : 'pointer-events-auto'
            }
            href={getPageParams(activePage - 1)}
          />
        </PaginationItem>

        {renderPageItems()}

        <PaginationItem>
          <PaginationNext
            className={
              activePage === totalPages
                ? 'pointer-events-none border-gray-400 text-gray-400'
                : 'pointer-events-auto'
            }
            href={getPageParams(activePage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CatalogPagination;
