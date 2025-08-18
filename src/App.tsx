import { useEffect, useState, type JSX } from 'react';
import MainLayout from './Layouts/MainLayout';
import Loading from './components/Loading';
import type { Character, DisneyApiInfo, DisneyApiResponse, Page } from './types';
import './App.css';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import InputSearch from './components/InputSearch';
import useDebounce from './hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import CardsList from './components/CardsList';
import { getCharacters } from './utils/apiRequests';
import GenericError from './components/GenericError';

export function App(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [apiInfo, setApiInfo] = useState<DisneyApiInfo>({
    count: 30,
    totalPages: 1,
    previousPage: null,
    nextPage: '',
  });
  const [characterSearched, setCharacterSearched] = useState<string>('');
  const debounceValue = useDebounce(characterSearched, 1000);
  const [pageType, setPageType] = useState<Page>({
    character: '',
    type: 'init',
    url: '',
  });

  const handlePages = (page: string): void => {
    if (page === 'next' && data && data.info.nextPage) {
      setPageType({
        character: '',
        type: 'next',
        url: data.info.nextPage,
      });
    } else if (page === 'prev' && data && data.info.previousPage) {
      setPageType({
        character: '',
        type: 'prev',
        url: data.info.previousPage,
      });
    }
  };

  const handleSearch = (character: string): void => {
    setCharacterSearched(character);
  };

  const searchCharacters = (character: string): void => {
    setPageType({ ...pageType, type: 'search', character });
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['fetchCharacters', pageType],
    queryFn: () => getCharacters(pageType),
  });

  useEffect(() => {
    if (debounceValue.length > 0) {
      void searchCharacters(debounceValue);
    } else {
      void searchCharacters('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <MainLayout>
      <section className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
        <InputSearch characterSearched={characterSearched} handleSearch={handleSearch} />
        {isPending ? <Loading /> : isError ? <GenericError /> : <CardsList characters={data ? data.data : []} />}
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
