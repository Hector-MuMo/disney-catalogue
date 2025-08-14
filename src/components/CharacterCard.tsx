import { useState, type JSX } from 'react';
import type { Character, Favourite } from '../types';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  toggleFavourite: (favourite: Favourite) => void;
}

const CharacterCard = ({ character, toggleFavourite }: CharacterCardProps): JSX.Element => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleStart = (): void => {
    toggleFavourite({
      isFavourite: !isFavourite,
      characterId: character._id,
    });
    setIsFavourite(!isFavourite);
  };

  return (
    <Card
      style={{ backgroundColor: '#00161A', borderColor: '#30CFB5', boxShadow: '0px 0px 1px 1px #30CFB5' }}
      className="p-5 w-full flex flex-row justify-center items-center"
    >
      <Avatar className=" size-35">
        <AvatarImage src={character.imageUrl} />
        <AvatarFallback>NO IMG</AvatarFallback>
      </Avatar>
      <CardHeader className="w-100 px-3">
        <CardTitle className="text-3xl text-amber-50">{character.name}</CardTitle>
        <CardDescription className="flex flex-wrap">
          <span className="px-2 py-1 mx-1 my-1 bg-purple-300 rounded-xl text-amber-50">
            <span className="mr-1 px-1 bg-purple-700 text-amber-50 rounded-xl ">
              {character.parkAttractions.length}
            </span>
            Atracciones
          </span>
          <span className="px-2 py-1 mx-1 my-1 bg-cyan-700 rounded-xl text-amber-50">
            <span className="mr-1 px-1 bg-cyan-400 text-amber-50 rounded-xl ">{character.films.length}</span>
            Peliculas
          </span>
          <span className="px-2 py-1 mx-1 my-1 bg-fuchsia-900 rounded-xl text-amber-50">
            <span className="mr-1 px-1 bg-fuchsia-600 text-amber-50 rounded-xl ">{character.videoGames.length}</span>
            Videojuegos
          </span>
          <span className="px-2 py-1 mx-1 my-1 bg-red-950 rounded-xl text-amber-50">
            <span className="mr-1 px-1 bg-red-800 text-amber-50 rounded-xl ">{character.enemies.length}</span> Enemigos
          </span>
          <span className="px-2 py-1 mx-1 my-1 bg-green-900 rounded-xl text-amber-50">
            <span className="mr-1 px-1 bg-green-700 text-amber-50 rounded-xl ">{character.allies.length}</span> Aliados
          </span>
        </CardDescription>
        <CardAction>
          <div
            onClick={handleStart}
            className={
              isFavourite
                ? 'p-1 rounded-3xl bg-yellow-800 hover:bg-yellow-700'
                : 'p-1 rounded-3xl bg-red-950 hover:bg-red-900'
            }
          >
            {isFavourite ? <Star color="#ffff00" size={35} /> : <Star color="#ff0000" size={35} />}
          </div>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default CharacterCard;
