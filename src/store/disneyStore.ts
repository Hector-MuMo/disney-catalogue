import { create } from 'zustand';
import type { Character, Favourite } from '../types';

interface DisneyState {
  characters: Character[];
  favourites: Favourite[];
  updateFavourite: (favourite: Favourite) => void;
  addCharacter?: (character: Character) => void;
  deleteCharacter?: (character: Character) => void;
}

export const useDisneyStore = create<DisneyState>((set) => ({
  characters: [],
  favourites: [],
  updateFavourite: (favourite): void =>
    set((state) => ({
      favourites:
        state.favourites.length > 0
          ? state.favourites.find((item) => item.characterId === favourite.characterId)
            ? state.favourites.map((item) => (item.characterId === favourite.characterId ? favourite : item))
            : [...state.favourites, favourite]
          : [favourite],
    })),
  addCharacter: (name): void =>
    set((state) => ({
      characters: [...state.characters, name],
    })),
  deleteCharacter: (character): void =>
    set((state) => ({
      characters: state.characters,
    })),
}));
