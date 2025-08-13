import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, type JSX } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';

export function App(): JSX.Element {
  const [page, setPage] = useState(0);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Buena suerte dev 👋🏼</h1>
      <Avatar className="inline-block mt-4">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Pagination
        totalPages={100}
        initialPage={page}
        onPageChange={(page) => {
          setPage(page);
        }}
      />
    </section>
  );
}
