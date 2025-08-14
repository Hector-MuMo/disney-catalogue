import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, type JSX } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import MainLayout from './Layouts/MainLayout';
import CardsList from './components/CardsList';

export function App(): JSX.Element {
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState([]);

  return (
    <MainLayout>
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
        <h1 className="text-4xl font-bold text-white">Buena suerte dev 👋🏼</h1>
        <Avatar className="inline-block mt-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardsList characters={characters} />
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
