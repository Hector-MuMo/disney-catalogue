import type { JSX } from 'react';
import CharacterCard from '../components/CharacterCard';
import MainLayout from '../Layouts/MainLayout';
import { useDisneyStore } from '../store/disneyStore';
import { useLocation } from 'react-router';

const gosthCharacter = {
  _id: 0,
  films: [],
  shortFilms: [],
  tvShows: [],
  videoGames: [],
  parkAttractions: [],
  allies: [],
  enemies: [],
  name: 'Gosth Character',
  imageUrl: '',
  url: '',
};

const Character = (): JSX.Element => {
  const location = useLocation();
  const { favourites } = useDisneyStore();
  const path = location.pathname.split('/');
  const fav = favourites.find((fav) => fav.character._id === Number(path[2]));

  const attractionsList = fav?.character.parkAttractions.map((attraction) => (
    <ul key={attraction}>
      <li>{attraction}</li>
    </ul>
  ));

  const moviesList = fav?.character.films.map((movie) => (
    <ul key={movie}>
      <li>{movie}</li>
    </ul>
  ));

  const videogamesList = fav?.character.videoGames.map((game) => (
    <ul key={game}>
      <li>{game}</li>
    </ul>
  ));

  const enemiesList = fav?.character.enemies.map((enemy) => (
    <ul key={enemy}>
      <li>{enemy}</li>
    </ul>
  ));

  const alliesList = fav?.character.allies.map((ally) => (
    <ul key={ally}>
      <li>{ally}</li>
    </ul>
  ));

  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
        <div className="my-10 w-auto h-full">
          <CharacterCard character={fav?.character ?? gosthCharacter} cardType="/" />
          <div className="mt-10 grid grid-col-1 gap-5 overflow-auto">
            <div className="p-3 bg-purple-700 text-amber-50 rounded-sm">
              <h4 className="text-xl underline mb-2">Atracciones</h4>
              {attractionsList && attractionsList?.length > 0 ? attractionsList : <span>No tiene Atracciones :(</span>}
            </div>
            <div className=" p-3 bg-cyan-700 rounded-sm text-amber-50">
              <h4 className="text-xl underline mb-2">Peliculas</h4>
              {moviesList && moviesList?.length > 0 ? moviesList : <span>No tiene Peliculas :(</span>}
            </div>
            <div className=" p-3 bg-fuchsia-900 rounded-sm text-amber-50">
              <h4 className="text-xl underline mb-2">Videojuegos</h4>
              {videogamesList && videogamesList?.length > 0 ? videogamesList : <span>No tiene Videojuegos :(</span>}
            </div>
            <div className=" p-3 bg-red-950 rounded-sm text-amber-50">
              <h4 className="text-xl underline mb-2">Enemigos</h4>
              {enemiesList && enemiesList?.length > 0 ? enemiesList : <span>No tiene Enemigos :)</span>}
            </div>
            <div className=" p-3 bg-green-900 rounded-sm text-amber-50">
              <h4 className="text-xl underline mb-2">Aliados</h4>
              {alliesList && alliesList?.length > 0 ? alliesList : <span>No tiene Aliados :(</span>}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Character;
