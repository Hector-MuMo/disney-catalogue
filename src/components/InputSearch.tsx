import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { JSX } from 'react';

interface InputSearchProps {
  characterSearched: string;
  handleSearch: (character: string) => void;
}

const InputSearch = ({ characterSearched, handleSearch }: InputSearchProps): JSX.Element => {
  return (
    <div className="w-full mt-5 flex justify-center items-center">
      <Input
        placeholder="Busca a tu personaje Disney"
        className="ml-5 w-1/4 text-amber-50"
        value={characterSearched}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button className="ml-3 cursor-pointer">Buscar</Button>
    </div>
  );
};

export default InputSearch;
