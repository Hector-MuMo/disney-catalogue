import type { JSX } from 'react';
import type { Character, Favourite } from '../types';
import CharacterCard from './CharacterCard';

interface CardsListPros {
  characters: Character[];
}

const CardsList = ({ characters }: CardsListPros): JSX.Element => {
  const shownList = characters.map((character) => <CharacterCard key={character._id} character={character} />);

  return <div className="mt-10 w-auto grid grid-cols-2 auto-rows-auto gap-3 justify-self-center">{shownList}</div>;
};

export default CardsList;
