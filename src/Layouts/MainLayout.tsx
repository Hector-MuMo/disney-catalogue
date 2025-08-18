import type { JSX, ReactNode } from 'react';
import { NavLink } from 'react-router';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <main className="h-full">
      <nav className="flex justify-around bg-blue-600">
        <div className="mx2 my-4">
          <h1 className="text-center text-4xl text-amber-50">Catalogo de Personajes Disney</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'rounded-xl py-2 px-5 mr-1 bg-blue-950 text-amber-50'
                : 'rounded-xl py-2 px-5 mr-1 bg-blue-400 text-amber-50'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? 'mt-2 sm:mt-0 rounded-xl py-2 px-5 mr-1 bg-blue-950 text-amber-50'
                : 'mt-2 sm:mt-0 rounded-xl py-2 px-5 mr-1 bg-blue-300 text-amber-50'
            }
          >
            Favourites
          </NavLink>
        </div>
      </nav>
      {children}
    </main>
  );
};

export default MainLayout;
