import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json());
};
