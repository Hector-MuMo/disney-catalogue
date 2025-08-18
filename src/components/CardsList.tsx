import type { JSX } from 'react';
import type { Character, Favourite } from '../types';
import CharacterCard from './CharacterCard';
import { HeartCrack } from 'lucide-react';

interface CardsListPros {
  characters: Character[];
  favourites?: Favourite[];
  location?: string;
}

const CardsList = ({ characters = [], favourites = [], location = '/' }: CardsListPros): JSX.Element => {
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  const shownList =
    location === '/favorites'
      ? favourites.map((favorite) => (
          <CharacterCard key={favorite.character._id} character={favorite.character} cardType={location} />
        ))
      : charactersArray.map((character) => (
          <CharacterCard key={character._id} character={character} cardType={location} />
        ));

  return (
    <div className="mt-10 w-auto grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-3 justify-self-center">
      {shownList.length > 0 ? (
        shownList
      ) : (
        <p className="text-amber-50 text-lg">
          <HeartCrack size={50} />
          No hay personajes para mostrar
        </p>
      )}
    </div>
  );
};

export default CardsList;
