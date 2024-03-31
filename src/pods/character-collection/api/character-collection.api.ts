import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const characterCollection = await fetch('https://rickandmortyapi.com/api/character');
  return characterCollection.json().then(response => response.results as CharacterEntityApi[]);
};
