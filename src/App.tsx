import { useEffect, useState, lazy, Suspense, type JSX } from 'react';
import { Pagination } from './components/Pagination';
import MainLayout from './Layouts/MainLayout';
import type { Character, DisneyApiResponse, Favourite } from './types';
import './App.css';

const CardsList = lazy(() => import('./components/CardsList'));

export function App(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleFavourite = (favourite: Favourite): void => {
    console.log(favourite);
  };

  const getCharacters = async (): Promise<void> => {
    try {
      const res = await fetch('https://api.disneyapi.dev/character?pageSize=20');
      if (!res.ok) {
        throw new Error('Error getting characters. Try again later.');
      }

      const chars = (await res.json()) as DisneyApiResponse;

      setCharacters(chars.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error:' + error.message);
      } else {
        throw new Error('Error in server');
      }
    }
  };

  useEffect(() => {
    void getCharacters();
  }, []);

  return (
    <MainLayout>
      <section className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
        <Suspense fallback={<Loading/>}>
          <CardsList characters={characters} toggleFavourite={handleFavourite} />
        </Suspense>
        <Pagination
          totalPages={100}
          initialPage={page}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </section>
    </MainLayout>
  );
}
