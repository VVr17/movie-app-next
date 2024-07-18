import FilterDrawer from './FilterDrawer';
import Sort from './Sort';

const FilterBar = () => {
  return (
    <>
      <div className="mb-6 border-b border-t border-b-card border-t-card bg-background md:mb-10 lg:mb-12">
        <div className="filter-line">
          <div className="mb-0.5 flex items-center justify-between bg-background py-2.5">
            <FilterDrawer />
            <Sort />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
