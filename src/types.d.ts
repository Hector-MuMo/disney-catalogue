interface DisneyApiResponse {
  info: DisneyApiInfo;
  data: Character[];
}

interface DisneyApiInfo {
  count: number;
  totalPages: number;
  previousPage: null;
  nextPage: string;
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
  characterId: number;
}
