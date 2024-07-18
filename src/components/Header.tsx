import { navigation } from '@/utils/constants/navigation';
import Link from 'next/link';
import Logo from './ui/appLogo';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 block bg-popover">
      <div className="container flex justify-between">
        <Logo />

        <nav className="flex items-center justify-center gap-3">
          {navigation.map(({ label, path }) => (
            <Link
              className="py-4 hover:text-accent-foreground"
              key={path}
              href={path}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
