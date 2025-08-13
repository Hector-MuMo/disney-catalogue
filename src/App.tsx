import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import './App.css';

export function App() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-4xl font-bold text-white">Buena suerte dev 👋🏼</h1>
      <Avatar className="inline-block mt-4">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>
  );
}
