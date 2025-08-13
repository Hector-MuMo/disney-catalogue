import { create } from 'zustand';

interface DisneyState {
  characters: any;
  addCharacter: (charcter: any) => void;
  deleteCharacter?: (character: any) => void;
}

export const useDisneyStore = create<DisneyState>((set) => ({
  characters: [],
  addCharacter: (name) =>
    set((state) => ({
      characters: [...state.characters, name],
    })),
  deleteCharacter: (character) =>
    set((state) => ({
      characters: state,
    })),
}));
