import { SearchIcon } from '@/assets/icons';
import { Input } from '../ui/input';

const SearchForm = () => {
  return (
    <form className="relative mb-4 w-full max-w-96">
      <Input type="search" />
      <div className="center desk:gap-2 absolute right-[4px] top-1/2 -translate-y-1/2 gap-4">
        <button
          title="submit search"
          type="submit"
          className="group flex h-9 w-10 items-center justify-center rounded-lg bg-primary lg:w-14"
        >
          <SearchIcon stroke="white" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
