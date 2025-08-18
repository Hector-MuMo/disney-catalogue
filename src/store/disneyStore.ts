import { create } from 'zustand';
import type { Character, Favourite } from '../types';

interface DisneyState {
  characters: Character[];
  favourites: Favourite[];
  updateFavourite: (favourite: Favourite) => void;
  deleteFavourite: (favourite: Favourite) => void;
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
          ? state.favourites.find((item) => item.character._id === favourite.character._id)
            ? state.favourites.map((item) => (item.character._id === favourite.character._id ? favourite : item))
            : [...state.favourites, favourite]
          : [favourite],
    })),
  deleteFavourite: (favourite): void =>
    set((state) => ({
      favourites:
        state.favourites.length > 0
          ? state.favourites.filter((fav) => fav.character._id !== favourite.character._id)
          : state.favourites,
    })),
  // addCharacter: (name): void =>
  //   set((state) => ({
  //     characters: [...state.characters, name],
  //   })),
  // deleteCharacter: (character): void =>
  //   set((state) => ({
  //     characters: state.characters,
  //   })),
}));
