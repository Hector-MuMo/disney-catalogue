import type { JSX } from 'react';
import type { Character } from '../types';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  return (
    <Card>
      <Avatar>
        <AvatarImage src={character.imageUrl} />
        <AvatarFallback>NO IMG</AvatarFallback>
      </Avatar>
      <CardHeader>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription>
          <span className="px-3 py-1 bg-purple-300">
            <span className="bg-purple-700">{character.parkAttractions.length}</span> Atracciones
          </span>
          <span>{character.films.length} Peliculas</span>
          <span>{character.videoGames.length} Videojuegos</span>
          <span>{character.enemies.length} Enemigos</span>
          <span>{character.allies.length} Aliados</span>
        </CardDescription>
        <CardAction>
          <Button>Favourite</Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default CharacterCard;
