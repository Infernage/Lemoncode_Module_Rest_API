import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (response.ok) return response.json();
  else throw new Error(response.statusText);
};
