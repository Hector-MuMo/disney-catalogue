import type { DisneyApiResponse, Page } from '../types';

const getCharacters = async (pageType: Page): Promise<DisneyApiResponse> => {
  try {
    const res = await fetch('https://api.disneyapi.dev/character?pageSize=20');
    if (!res.ok) {
      throw new Error('Error getting characters. Try again later.');
    }

    const chars = (await res.json()) as DisneyApiResponse;

    if (pageType.type === 'next') {
      const res = await fetch(pageType.url);
      if (!res.ok) {
        throw new Error('Error getting characters. Try again later.');
      }

      const nextChars = (await res.json()) as DisneyApiResponse;
      return nextChars;
    } else if (pageType.type === 'prev') {
      const res = await fetch(pageType.url);
      if (!res.ok) {
        throw new Error('Error getting characters. Try again later.');
      }

      const prevChars = (await res.json()) as DisneyApiResponse;
      return prevChars;
    } else if (pageType.type === 'search' && pageType.character.length > 0) {
      const res = await fetch(`https://api.disneyapi.dev/character?name=${pageType.character}`);
      if (!res.ok) {
        throw new Error('Error getting characters. Try again later.');
      }

      const search = (await res.json()) as DisneyApiResponse;
      return search;
    }

    return chars;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Error:' + error.message);
    } else {
      throw new Error('Error in server');
    }
  }
};

export { getCharacters };
