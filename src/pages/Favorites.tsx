import { type JSX } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useLocation } from 'react-router';
import CardsList from '../components/CardsList';
import { useDisneyStore } from '../store/disneyStore';

const Favorites = (): JSX.Element => {
  const { favourites } = useDisneyStore();
  const location = useLocation();

  return (
    <MainLayout>
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
        <h2 className="text-2xl text-amber-300">Personajes Favoritos</h2>
        <CardsList characters={[]} favourites={favourites} location={location.pathname} />
      </section>
    </MainLayout>
  );
};

export default Favorites;
