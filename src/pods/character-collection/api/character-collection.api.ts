import { CharacterEntityApi } from './character-collection.api-model';

const apiUrl = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const characterCollection = await fetch(apiUrl);
  if (characterCollection.ok)
  return characterCollection.json().then(response => response as CharacterEntityApi[]);
  else
    throw new Error(characterCollection.statusText);
};
