interface DisneyApiResponse {
  info: DisneyApiInfo;
  data: Character[];
}

interface DisneyApiInfo {
  count: number;
  totalPages: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface Character {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  name: string;
  imageUrl: string;
  url: string;
}

export interface Favourite {
  isFavourite: boolean;
  character: Character;
}

export type Page = {
  character: string;
  type: string;
  url: string;
};
