import { useEffect, useState, lazy, Suspense, type JSX } from 'react';
import MainLayout from './Layouts/MainLayout';
import Loading from './components/Loading';
import type { Character, DisneyApiInfo, DisneyApiResponse } from './types';
import './App.css';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const CardsList = lazy(() => import('./components/CardsList'));

export function App(): JSX.Element {
  //const [page, setPage] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [apiInfo, setApiInfo] = useState<DisneyApiInfo>({
    count: 30,
    totalPages: 1,
    previousPage: null,
    nextPage: '',
  });

  const handlePages = (page: string): void => {
    const loadNewPage = async (url: string | null): Promise<void> => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error getting characters. Try again later.');
        }

        const chars = (await res.json()) as DisneyApiResponse;

        setCharacters(chars.data);
        setApiInfo(chars.info);
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error('Error:' + error.message);
        } else {
          throw new Error('Error in server');
        }
      }
    };

    if (page === 'next') {
      void loadNewPage(apiInfo.nextPage);
    } else {
      void loadNewPage(apiInfo.previousPage);
    }
  };

  const getCharacters = async (): Promise<void> => {
    try {
      const res = await fetch('https://api.disneyapi.dev/character?pageSize=20');
      if (!res.ok) {
        throw new Error('Error getting characters. Try again later.');
      }

      const chars = (await res.json()) as DisneyApiResponse;

      setCharacters(chars.data);
      setApiInfo(chars.info);
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
        <Suspense fallback={<Loading />}>
          <CardsList characters={characters} />
        </Suspense>
        <Pagination className="my-5">
          <PaginationContent>
            <PaginationItem className="text-amber-50">
              <PaginationPrevious onClick={() => handlePages('prev')} />
            </PaginationItem>
            <PaginationItem className="text-amber-50">
              <PaginationNext onClick={() => handlePages('next')} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </MainLayout>
  );
}
