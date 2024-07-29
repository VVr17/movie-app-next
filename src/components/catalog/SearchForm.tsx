'use client';
import { SearchIcon } from '@/assets/icons';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface SearchFormFields {
  search: string;
}

const SearchForm = () => {
  const { updateSearchParams, retrieveSearchParams } = useQueryParams();

  const methods = useForm<SearchFormFields>({
    defaultValues: { search: '' },
  });
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = methods;

  useEffect(() => {
    const { search } = retrieveSearchParams();

    if (search) {
      reset({ search });
    }
  }, []);

  const onSubmit = ({ search }: SearchFormFields) => {
    updateSearchParams(search);
    reset({ search });
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mb-4 w-full max-w-[400px]"
      >
        <FormField
          control={control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="search" className="py-3 pl-4 pr-16" />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="center absolute right-[4px] top-[2px] gap-4 lg:gap-2">
          <button
            title="submit search"
            type="submit"
            className="group flex h-9 w-10 items-center justify-center rounded-lg bg-primary lg:w-14"
            disabled={!isDirty}
          >
            <SearchIcon stroke="white" />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
