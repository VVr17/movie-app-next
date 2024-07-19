import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <PuffLoader color="#00CF78" />
      </div>
    </div>
  );
};

export default Loader;
