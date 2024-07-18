import tmdbLogo from '@/assets/icons/tmdb.svg';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-popover pb-5 pt-6">
      <div className="container flex flex-col items-center justify-center text-center">
        <a
          href="https://www.themoviedb.org/"
          className="w-30 mb-4 flex h-auto items-center justify-center gap-2"
          target="_blank"
          rel="noopener"
        >
          <Image
            priority
            src={tmdbLogo}
            alt="tmdb"
            className="h-full w-full object-contain"
          />
        </a>

        <p className="text-gray text-right text-xs">
          Filmoteka &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
