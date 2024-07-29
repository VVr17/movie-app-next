'use client';
import CheckboxGroup from '@/components/RHFComponents/CheckboxGroup';
import Field from '@/components/RHFComponents/Field';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useQueryParams } from '@/hooks/useQueryParams';
import { fetchGenres } from '@/services/fetchGenres';
import { Genre } from '@/types/genre';
import { defaultFilter } from '@/utils/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  genres: z.array(z.number()),
  minYear: z.string(),
  maxYear: z.string(),
});

interface FilterFormProps {
  closeFilter: () => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ closeFilter }) => {
  const { updateFilterParams, retrieveSearchParams } = useQueryParams();

  const params = useParams();

  const [genres, setGenres] = useState<Genre[] | null>(null);
  const currentYear = new Date().getFullYear();
  const genresOptions = genres?.map(({ id, name }) => ({ id, label: name }));

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: defaultFilter,
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    const getGenres = async () => {
      const genres = await fetchGenres();

      if (genres && params.type === 'movies') {
        setGenres(genres.movieGenres);
      } else if (genres && params.type === 'tv') {
        setGenres(genres.tvGenres);
      }
    };

    const { genres, minYear, maxYear } = retrieveSearchParams();
    const formattedGenres = genres?.map((genre) => +genre);

    reset({
      genres: formattedGenres ? formattedGenres : [],
      minYear: minYear ? minYear : '',
      maxYear: maxYear ? maxYear : '',
    });

    getGenres();
  }, []);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    updateFilterParams(data);
    reset(data);
    closeFilter();
  };

  const handleReset = () => {
    reset(defaultFilter);
    updateFilterParams(defaultFilter);
    closeFilter();
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="h-full space-y-8">
        <div>
          <p className="mb-4 text-xl font-normal text-primary">Release Year</p>
          <div className="flex gap-4">
            <Field
              name="minYear"
              label="From"
              type="number"
              min={1900}
              max={currentYear}
            />
            <Field
              name="maxYear"
              label="To"
              type="number"
              min={1900}
              max={currentYear}
            />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xl font-normal text-primary">Genres</p>
          {genresOptions && (
            <CheckboxGroup name="genres" options={genresOptions} />
          )}
        </div>

        <div>
          <Button className="mb-2 w-full" type="submit">
            Submit
          </Button>
          <Button
            variant="outline"
            className="w-full"
            type="button"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FilterForm;
